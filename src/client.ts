import { EventEmitter } from 'events'
import Long from 'long'
import ProtobufJS from 'protobufjs'
import tls from 'tls'
import axios from 'axios'
import registerGCM, { checkIn } from './gcm'
import registerFCM from './fcm'
import Parser from './parser'
import decrypt from './utils/decrypt'
import Logger from './utils/logger'
import Protos, { mcs_proto } from './protos'

import { Variables, MCSProtoTag } from './constants'

import type * as Types from './types'

export {
    Types
}

ProtobufJS.util.Long = Long
ProtobufJS.configure()

const FCM_SEND_API = 'https://fcm.googleapis.com/fcm/send'
const HOST = 'mtalk.google.com'
const PORT = 5228
const MAX_RETRY_TIMEOUT = 15

export default class PushReceiver extends EventEmitter {
    private config: Types.ClientConfig
    private socket: tls.TLSSocket
    private retryCount = 0
    private retryTimeout: NodeJS.Timeout
    private parser: Parser
    private heartbeatTimer?: NodeJS.Timeout
    private heartbeatTimeout?: NodeJS.Timeout
    private streamId = 0
    private lastStreamIdReported = -1

    public persistentIds: Types.PersistentId[]

    constructor(config: Types.ClientConfig) {
        super()

        Logger.setLogLevel(config.logLevel ?? 'NONE')

        Logger.verbose('constructor', config)

        this.config = {
            bundleId: 'receiver.push.com',
            chromeId: 'org.chromium.linux',
            chromeVersion: '94.0.4606.51',
            vapidKey: 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4', // This is default Firebase VAPID key
            persistentIds: [],
            heartbeatIntervalMs: 5 * 60 * 1000, // 5 min
            ...config
        }

        this.persistentIds = this.config.persistentIds
    }

    public setLogLevel(logLevel: Types.ClientConfig['logLevel']) {
        Logger.setLogLevel(logLevel)
    }

    public on(event: 'ON_MESSAGE_RECEIVED', listener: (data: Types.MessageEnvelope) => void): this
    public on(event: 'ON_CREDENTIALS_CHANGE', listener: (data: Types.EventChangeCredentials) => void): this
    public on(event: 'ON_CONNECT', listener: (data: void) => void): this
    public on(event: 'ON_DISCONNECT', listener: (data: void) => void): this
    public on(event: 'ON_READY', listener: (data: void) => void): this
    public on(event: 'ON_HEARTBEAT', listener: (data: void) => void): this
    public on(event: unknown, listener: unknown): this {
        return EventEmitter.prototype.on.apply(this, [event, listener])
    }

    public off(event: 'ON_MESSAGE_RECEIVED', listener: (data: Types.MessageEnvelope) => void): this
    public off(event: 'ON_CREDENTIALS_CHANGE', listener: (data: Types.EventChangeCredentials) => void): this
    public off(event: 'ON_CONNECT', listener: (data: void) => void): this
    public off(event: 'ON_DISCONNECT', listener: (data: void) => void): this
    public off(event: 'ON_READY', listener: (data: void) => void): this
    public off(event: 'ON_HEARTBEAT', listener: (data: void) => void): this
    public off(event: unknown, listener: unknown): this {
        return EventEmitter.prototype.off.apply(this, [event, listener])
    }

    public emit(event: 'ON_MESSAGE_RECEIVED', data: Types.MessageEnvelope): boolean
    public emit(event: 'ON_CREDENTIALS_CHANGE', data: Types.EventChangeCredentials): boolean
    public emit(event: 'ON_CONNECT'): boolean
    public emit(event: 'ON_DISCONNECT'): boolean
    public emit(event: 'ON_READY'): boolean
    public emit(event: 'ON_HEARTBEAT'): boolean
    public emit(event: unknown, ...args: unknown[]): boolean {
        Logger.debug('emit', event, ...args)
        return EventEmitter.prototype.emit.apply(this, [event, ...args])
    }

    public onNotification(listener: (data: Types.MessageEnvelope) => void): Types.DisposeFunction {
        this.on('ON_MESSAGE_RECEIVED', listener)
        return () => this.off('ON_MESSAGE_RECEIVED', listener)
    }

    public onCredentialsChanged(listener: (data: Types.EventChangeCredentials) => void): Types.DisposeFunction {
        this.on('ON_CREDENTIALS_CHANGE', listener)
        return () => this.off('ON_CREDENTIALS_CHANGE', listener)
    }

    public onReady(listener: () => void): Types.DisposeFunction {
        this.on('ON_READY', listener)
        return () => this.off('ON_READY', listener)
    }

    public connect = async (): Promise<void> => {
        if (this.socket) return

        Logger.verbose('connect')
        if (this.config.credentials) {
            Logger.verbose('checkin')
            await this.checkIn()
        } else {
            Logger.warn('Missing credentials... Runing register.')
            const oldCredentials = this.config.credentials
            const newCredentials = await this.register()
            this.emit('ON_CREDENTIALS_CHANGE', { oldCredentials, newCredentials })
            this.config.credentials = newCredentials
            Logger.verbose('got credentials', newCredentials)
        }

        this.lastStreamIdReported = -1

        this.socket = new tls.TLSSocket(null)
        this.socket.setKeepAlive(true)
        this.socket.on('connect', this.handleSocketConnect)
        this.socket.on('close', this.handleSocketClose)
        this.socket.on('error', this.handleSocketError)
        this.socket.connect({ host: HOST, port: PORT })

        this.parser = new Parser(this.socket)
        this.parser.on('message', this.handleMessage)
        this.parser.on('error', this.handleParserError)

        this.sendLogin()

        return new Promise((res) => {
            const dispose = this.onReady(() => {
                dispose()
                res()
            })
        })
    }

    public destroy = () => {
        clearTimeout(this.retryTimeout)
        this.clearHeartbeat()

        if (this.socket) {
            this.socket.off('close', this.handleSocketClose)
            this.socket.off('error', this.handleSocketError)
            this.socket.destroy()
            this.socket = null
        }

        if (this.parser) {
            this.parser.off('error', this.handleParserError)
            this.parser.destroy()
            this.parser = null
        }
    }

    public async register(): Promise<Types.Credentials> {
        const subscription = await registerGCM(this.config)
        return registerFCM(subscription, this.config)
    }

    public checkIn(): Promise<Types.GcmData> {
        return checkIn(this.config)
    }

    private clearHeartbeat() {
        clearTimeout(this.heartbeatTimer)
        this.heartbeatTimer = undefined

        clearTimeout(this.heartbeatTimeout)
        this.heartbeatTimeout = undefined
    }

    private startHeartbeat() {
        this.clearHeartbeat()

        if (!this.config.heartbeatIntervalMs) return

        this.heartbeatTimer = setTimeout(this.sendHeartbeatPing.bind(this), this.config.heartbeatIntervalMs)
        this.heartbeatTimeout = setTimeout(this.socketRetry.bind(this), this.config.heartbeatIntervalMs * 2)
    }

    private handleSocketConnect = (): void => {
        this.retryCount = 0
        this.emit('ON_CONNECT')
        this.startHeartbeat()
    }

    private handleSocketClose = (): void => {
        this.emit('ON_DISCONNECT')
        this.clearHeartbeat()
        this.socketRetry()
    }

    private handleSocketError = (err: Error): void => {
        Logger.error(err)
        // ignore, the close handler takes care of retry
    }

    private socketRetry() {
        this.destroy()
        const timeout = Math.min(++this.retryCount, MAX_RETRY_TIMEOUT) * 1000
        this.retryTimeout = setTimeout(this.connect, timeout)
    }

    private getStreamId(): number {
        this.lastStreamIdReported = this.streamId
        return this.streamId
    }

    private newStreamIdAvailable(): boolean {
        return this.lastStreamIdReported != this.streamId
    }

    private sendHeartbeatPing() {
        const heartbeatPingRequest: Record<string, unknown> = {}

        if (this.newStreamIdAvailable()) {
            heartbeatPingRequest.last_stream_id_received = this.getStreamId()
        }

        Logger.verbose('Heartbeat send pong', heartbeatPingRequest)

        const HeartbeatPingRequestType = Protos.mcs_proto.HeartbeatPing
        const errorMessage = HeartbeatPingRequestType.verify(heartbeatPingRequest)

        if (errorMessage) {
            throw new Error(errorMessage)
        }

        const buffer = HeartbeatPingRequestType.encodeDelimited(heartbeatPingRequest).finish()

        Logger.verbose('HEARTBEAT sending PING', heartbeatPingRequest)

        this.socket.write(Buffer.concat([
            Buffer.from([MCSProtoTag.kHeartbeatPingTag]),
            buffer,
        ]))
    }

    private sendHeartbeatPong(object) {
        const heartbeatAckRequest: Record<string, any> = {}

        if (this.newStreamIdAvailable()) {
            heartbeatAckRequest.last_stream_id_received = this.getStreamId()
        }

        if (object?.status) {
            heartbeatAckRequest.status = object.status
        }

        Logger.verbose('Heartbeat send pong', heartbeatAckRequest)

        const HeartbeatAckRequestType = Protos.mcs_proto.HeartbeatAck
        const errorMessage = HeartbeatAckRequestType.verify(heartbeatAckRequest)
        if (errorMessage) {
            throw new Error(errorMessage)
        }

        const buffer = HeartbeatAckRequestType.encodeDelimited(heartbeatAckRequest).finish()

        Logger.verbose('HEARTBEAT sending PONG', heartbeatAckRequest)

        this.socket.write(Buffer.concat([
            Buffer.from([MCSProtoTag.kHeartbeatAckTag]),
            buffer
        ]))
    }

    private sendLogin() {
        const gcm = this.config.credentials.gcm
        const LoginRequestType = Protos.mcs_proto.LoginRequest
        const hexAndroidId = Long.fromString(gcm.androidId).toString(16)
        const loginRequest: mcs_proto.ILoginRequest = {
            adaptiveHeartbeat: false,
            authService: 2,
            authToken: gcm.securityToken,
            id: `chrome-${this.config.chromeVersion}`,
            domain: 'mcs.android.com',
            deviceId: `android-${hexAndroidId}`,
            networkType: 1,
            resource: gcm.androidId,
            user: gcm.androidId,
            useRmq2: true,
            setting: [{ name: 'new_vc', value: '1' }],
            clientEvent: [],
            // Id of the last notification received
            receivedPersistentId: this.config.persistentIds,
        }

        if (this.config.heartbeatIntervalMs) {
            loginRequest.heartbeatStat = {
                ip: '',
                timeout: true,
                intervalMs: this.config.heartbeatIntervalMs,
            }
        }

        const errorMessage = LoginRequestType.verify(loginRequest)
        if (errorMessage) {
            throw new Error(errorMessage)
        }

        const buffer = LoginRequestType.encodeDelimited(loginRequest).finish()

        this.socket.write(Buffer.concat([
            Buffer.from([Variables.kMCSVersion, MCSProtoTag.kLoginRequestTag]),
            buffer,
        ]))
    }

    private handleMessage = ({ tag, object }: Types.DataPacket): void => {
        // any message will reset the client side heartbeat timeout.
        this.startHeartbeat()

        switch (tag) {
            case MCSProtoTag.kLoginResponseTag:
                // clear persistent ids, as we just sent them to the server while logging in
                this.config.persistentIds = []
                this.emit('ON_READY')
                this.startHeartbeat()
                break

            case MCSProtoTag.kDataMessageStanzaTag:
                this.handleDataMessage(object)
                break

            case MCSProtoTag.kHeartbeatPingTag:
                this.emit('ON_HEARTBEAT')
                Logger.verbose('HEARTBEAT PING', object)
                this.sendHeartbeatPong(object)
                break

            case MCSProtoTag.kHeartbeatAckTag:
                this.emit('ON_HEARTBEAT')
                Logger.verbose('HEARTBEAT PONG', object)
                break

            case MCSProtoTag.kCloseTag:
                Logger.verbose('Close: Server requested close! message: ', JSON.stringify(object))
                this.handleSocketClose()
                break

            case MCSProtoTag.kLoginRequestTag:
                Logger.verbose('Login request: message: ', JSON.stringify(object))
                break

            case MCSProtoTag.kIqStanzaTag:
                Logger.debug('IqStanza: If anyone knows what is this and how to respond, please let me know! - message: ', JSON.stringify(object))
                // FIXME: If anyone knows what is this and how to respond, please let me know
                break

            default:
                Logger.error('Unknown message: ', JSON.stringify(object))
                return

            // no default
        }

        this.streamId++
    }

    private handleDataMessage = (object): void => {
        if (this.persistentIds.includes(object.persistentId)) {
            return
        }

        let message
        try {
            message = decrypt(object, this.config.credentials.keys)
        } catch (error) {
            switch (true) {
                case error.message.includes('Unsupported state or unable to authenticate data'):
                case error.message.includes('crypto-key is missing'):
                case error.message.includes('salt is missing'):
                    // NOTE(ibash) Periodically we're unable to decrypt notifications. In
                    // all cases we've been able to receive future notifications using the
                    // same keys. So, we silently drop this notification.
                    Logger.warn('Message dropped as it could not be decrypted: ' + error.message)
                    return
                default:
                    throw error
            }
        }

        // Maintain persistentIds updated with the very last received value
        this.persistentIds.push(object.persistentId)
        // Send notification
        this.emit('ON_MESSAGE_RECEIVED', {
            message,
            // Needs to be saved by the client
            persistentId: object.persistentId,
        })
    }

    private handleParserError = (error) => {
        Logger.error(error)
        this.socketRetry()
    }

    public send(message: Types.MessageToSend, serverApiKey: string): Promise<void> {
        Logger.verbose('testMessage')
        if (!serverApiKey) throw new Error('Can\'t test messages without serverApiKey')

        const data = {
            time_to_live: 3,
            data: message,
            registration_ids: [this.config.credentials.fcm.token]
        }

        return axios.post(FCM_SEND_API, data, {
            headers: {
                Authorization: `key=${serverApiKey}`
            }
        }).then(({ data }) => {
            if (data.failure) {
                Logger.debug('Message test failed')
                throw new Error(data)
            }

            Logger.debug('Message test passed')
        })
    }

    public testMessage(serverApiKey: string): Promise<void> {
        Logger.verbose('testMessage')
        return this.send({
            message: "PushReceiver test message",
            title: "testMessage",
            key: "",
            action: ""
        }, serverApiKey)
    }
}

export { PushReceiver }
