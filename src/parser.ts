import EventEmitter from 'events'
import ProtobufJS from 'protobufjs'
import Logger from './utils/logger'
import { TLSSocket } from 'tls'
import Protos from './protos'
import {
    Variables,
    ProcessingState,
    MCSProtoTag
} from './constants'

// Parser parses wire data from gcm.
// This takes the role of WaitForData in the chromium connection handler.
//
// The main differences from the chromium implementation are:
// - Did not use a max packet length (kDefaultDataPacketLimit), instead we just
//   buffer data in this.data
// - Error handling around protobufs
// - Setting timeouts while waiting for data
//
// ref: https://cs.chromium.org/chromium/src/google_apis/gcm/engine/connection_handler_impl.cc?rcl=dc7c41bc0ee5fee0ed269495dde6b8c40df43e40&l=178
export default class Parser extends EventEmitter {
    private socket: TLSSocket
    private state: ProcessingState = ProcessingState.MCS_VERSION_TAG_AND_SIZE
    private data: Buffer = Buffer.alloc(0)
    private messageTag = 0
    private messageSize = 0
    private handshakeComplete = false
    private isWaitingForData = true

    constructor(socket: TLSSocket) {
        super()

        this.socket = socket
        this.socket.on('data', this.handleData)
    }

    public destroy(): void {
        this.isWaitingForData = false
        this.socket.removeListener('data', this.handleData)
    }

    private emitError(error): void {
        this.destroy()
        this.emit('error', error)
    }

    private handleData = (buffer) => {
        Logger.verbose(`Got data: ${buffer.length}`)
        this.data = Buffer.concat([this.data, buffer])
        if (this.isWaitingForData) {
            this.isWaitingForData = false
            this.waitForData()
        }
    }

    private waitForData() {
        Logger.verbose(`waitForData state: ${this.state}`)

        let minBytesNeeded = 0

        switch (this.state) {
            case ProcessingState.MCS_VERSION_TAG_AND_SIZE:
                minBytesNeeded = Variables.kVersionPacketLen + Variables.kTagPacketLen + Variables.kSizePacketLenMin
                break
            case ProcessingState.MCS_TAG_AND_SIZE:
                minBytesNeeded = Variables.kTagPacketLen + Variables.kSizePacketLenMin
                break
            case ProcessingState.MCS_SIZE:
                break
            case ProcessingState.MCS_PROTO_BYTES:
                minBytesNeeded = this.messageSize
                break
            default:
                this.emitError(new Error(`Unexpected state: ${this.state}`))
                return
        }

        if (this.data.length < minBytesNeeded) {
            // TODO(ibash) set a timeout and check for socket disconnect
            Logger.verbose(`Socket read finished prematurely. Waiting for ${minBytesNeeded - this.data.length} more bytes`)
            this.isWaitingForData = true
            return
        }

        Logger.verbose(`Processing MCS data: state == ${this.state}`)

        switch (this.state) {
            case ProcessingState.MCS_VERSION_TAG_AND_SIZE:
                this.handleGotVersion()
                break
            case ProcessingState.MCS_TAG_AND_SIZE:
                this.handleGotMessageTag()
                break
            case ProcessingState.MCS_SIZE:
                this.handleGotMessageSize()
                break
            case ProcessingState.MCS_PROTO_BYTES:
                this.handleGotMessageBytes()
                break
            default:
                this.emitError(new Error(`Unexpected state: ${this.state}`))
                return
        }
    }

    private handleGotVersion() {
        const version = this.data.readInt8(0)
        this.data = this.data.slice(1)
        Logger.verbose(`VERSION IS ${version}`)

        if (version < Variables.kMCSVersion && version !== 38) {
            this.emitError(new Error(`Got wrong version: ${version}`))
            return
        }

        // Process the LoginResponse message tag.
        this.handleGotMessageTag()
    }

    private handleGotMessageTag() {
        this.messageTag = this.data.readInt8(0)
        this.data = this.data.slice(1)
        Logger.verbose(`RECEIVED PROTO OF TYPE ${this.messageTag}`)

        this.handleGotMessageSize()
    }

    private handleGotMessageSize() {
        let incompleteSizePacket = false
        const reader = new ProtobufJS.BufferReader(this.data)

        try {
            this.messageSize = reader.int32()
        } catch (error) {
            if (error.message.startsWith('index out of range:')) {
                incompleteSizePacket = true
            } else {
                this.emitError(error)
                return
            }
        }

        // TODO(ibash) in chromium code there is an extra check here of:
        // if prev_byte_count >= kSizePacketLenMax then something else went wrong
        // NOTE(ibash) I could only test this case by manually cutting the buffer
        // above to be mid-packet like: new ProtobufJS.BufferReader(this.data.slice(0, 1))
        if (incompleteSizePacket) {
            this.state = ProcessingState.MCS_SIZE
            this.waitForData()
            return
        }

        this.data = this.data.slice(reader.pos)

        Logger.verbose(`Proto size: ${this.messageSize}`)

        if (this.messageSize > 0) {
            this.state = ProcessingState.MCS_PROTO_BYTES
            this.waitForData()
        } else {
            this.handleGotMessageBytes()
        }
    }

    private handleGotMessageBytes() {
        const protobuf = this.buildProtobufFromTag(this.messageTag)
        if (!protobuf) {
            this.emitError(new Error('Unknown tag'))
            return
        }

        // Messages with no content are valid just use the default protobuf for
        // that tag.
        if (this.messageSize === 0) {
            this.emit('message', { tag: this.messageTag, object: {} })
            this.getNextMessage()
            return
        }

        if (this.data.length < this.messageSize) {
            // Continue reading data.
            Logger.verbose(`Continuing data read. Buffer size is ${this.data.length}, expecting ${this.messageSize}`)
            this.state = ProcessingState.MCS_PROTO_BYTES
            this.waitForData()
            return
        }

        const buffer = this.data.slice(0, this.messageSize)
        const message = protobuf.decode(buffer)

        this.data = this.data.slice(this.messageSize)

        const object = protobuf.toObject(message, {
            longs: String,
            enums: String,
            bytes: Buffer,
        })

        this.emit('message', { tag: this.messageTag, object: object })

        if (this.messageTag === MCSProtoTag.kLoginResponseTag) {
            if (this.handshakeComplete) {
                Logger.error('Unexpected login response')
            } else {
                this.handshakeComplete = true
                Logger.verbose('GCM Handshake complete.')
            }
        }

        this.getNextMessage()
    }

    private getNextMessage() {
        this.messageTag = 0
        this.messageSize = 0
        this.state = ProcessingState.MCS_TAG_AND_SIZE
        this.waitForData()
    }

    private buildProtobufFromTag(tag) {
        switch (tag) {
            case MCSProtoTag.kHeartbeatPingTag: return Protos.mcs_proto.HeartbeatPing
            case MCSProtoTag.kHeartbeatAckTag: return Protos.mcs_proto.HeartbeatAck
            case MCSProtoTag.kLoginRequestTag: return Protos.mcs_proto.LoginRequest
            case MCSProtoTag.kLoginResponseTag: return Protos.mcs_proto.LoginResponse
            case MCSProtoTag.kCloseTag: return Protos.mcs_proto.Close
            case MCSProtoTag.kIqStanzaTag: return Protos.mcs_proto.IqStanza
            case MCSProtoTag.kDataMessageStanzaTag: return Protos.mcs_proto.DataMessageStanza
            case MCSProtoTag.kStreamErrorStanzaTag: return Protos.mcs_proto.StreamErrorStanza
            default:
                return null
        }
    }
}
