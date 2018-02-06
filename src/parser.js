const EventEmitter = require('events');
const path = require('path');
const {load, BufferReader} = require('protobufjs');

// enum ProcessingState
//
// Processing the version, tag, and size packets (assuming minimum length
// size packet). Only used during the login handshake.
const MCS_VERSION_TAG_AND_SIZE = 0;
// Processing the tag and size packets (assuming minimum length size
// packet). Used for normal messages.
const MCS_TAG_AND_SIZE = 1;
// Processing the size packet alone.
const MCS_SIZE = 2;
// Processing the protocol buffer bytes (for those messages with non-zero
// sizes).
const MCS_PROTO_BYTES = 3;

// # of bytes a MCS version packet consumes.
const kVersionPacketLen = 1;
// # of bytes a tag packet consumes.
const kTagPacketLen = 1;
// Max # of bytes a length packet consumes. A Varint32 can consume up to 5 bytes
// (the msb in each byte is reserved for denoting whether more bytes follow).
// Although the protocol only allows for 4KiB payloads currently, and the socket
// stream buffer is only of size 8KiB, it's possible for certain applications to
// have larger message sizes. When payload is larger than 4KiB, an temporary
// in-memory buffer is used instead of the normal in-place socket stream buffer.
const kSizePacketLenMin = 1;
const kSizePacketLenMax = 5; // eslint-disable-line no-unused-vars

// The current MCS protocol version.
const kMCSVersion = 41;

// MCS Message tags.
// WARNING: the order of these tags must remain the same, as the tag values
// must be consistent with those used on the server.
// enum MCSProtoTag {
const kHeartbeatPingTag = 0;
const kHeartbeatAckTag = 1;
const kLoginRequestTag = 2;
const kLoginResponseTag = 3;
const kCloseTag = 4;
const kMessageStanzaTag = 5; // eslint-disable-line no-unused-vars
const kPresenceStanzaTag = 6; // eslint-disable-line no-unused-vars
const kIqStanzaTag = 7;
const kDataMessageStanzaTag = 8;
const kBatchPresenceStanzaTag = 9; // eslint-disable-line no-unused-vars
const kStreamErrorStanzaTag = 10;
const kHttpRequestTag = 11; // eslint-disable-line no-unused-vars
const kHttpResponseTag = 12; // eslint-disable-line no-unused-vars
const kBindAccountRequestTag = 13; // eslint-disable-line no-unused-vars
const kBindAccountResponseTag = 14; // eslint-disable-line no-unused-vars
const kTalkMetadataTag = 15; // eslint-disable-line no-unused-vars
const kNumProtoTypes = 16; // eslint-disable-line no-unused-vars

const DEBUG = () => {};
// uncomment the line below to output debug messages
// const DEBUG = console.log;

let proto = null;

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
module.exports = class Parser extends EventEmitter {
  static async init () {
    if (proto) {
      return;
    }
    proto = await load(path.resolve(__dirname, 'mcs.proto'));
  }

  constructor(socket) {
    super();
    this.socket = socket;
    this.state = MCS_VERSION_TAG_AND_SIZE;
    this.data = Buffer.alloc(0);
    this.sizePacketSoFar = 0;
    this.messageTag = 0;
    this.messageSize = 0;
    this.handshakeComplete = false;
    this.isWaitingForData = true;
    this.onData = this.onData.bind(this);
    this.socket.on('data', this.onData);
  }

  destroy() {
    this.isWaitingForData = false;
    this.socket.removeListener('data', this.onData);
  }

  emitError(error) {
    this.destroy();
    this.emit('error', error);
  }

  onData (buffer) {
    DEBUG(`Got data: ${buffer.length}`);
    this.data = Buffer.concat([this.data, buffer]);
    if (this.isWaitingForData) {
      this.isWaitingForData = false;
      this.waitForData();
    }
  }

  waitForData() {
    DEBUG(`waitForData state: ${this.state}`);

    let minBytesNeeded = 0;

    switch(this.state) {
      case MCS_VERSION_TAG_AND_SIZE:
        minBytesNeeded = kVersionPacketLen + kTagPacketLen + kSizePacketLenMin;
        break;
      case MCS_TAG_AND_SIZE:
        minBytesNeeded = kTagPacketLen + kSizePacketLenMin;
        break;
      case MCS_SIZE:
        minBytesNeeded = this.sizePacketSoFar + 1;
        break;
      case MCS_PROTO_BYTES:
        minBytesNeeded = this.messageSize;
        break;
      default:
        this.emitError(new Error(`Unexpected state: ${this.state}`));
        return;
    }

    if (this.data.length < minBytesNeeded) {
      // TODO(ibash) set a timeout and check for socket disconnect
      DEBUG(`Socket read finished prematurely. Waiting for ${minBytesNeeded - this.data.length} more bytes`);
      this.isWaitingForData = true;
      return;
    }

    DEBUG(`Processing MCS data: state == ${this.state}`);

    switch(this.state) {
      case MCS_VERSION_TAG_AND_SIZE:
        this.onGotVersion();
        break;
      case MCS_TAG_AND_SIZE:
        this.onGotMessageTag();
        break;
      case MCS_SIZE:
        this.onGotMessageSize();
        break;
      case MCS_PROTO_BYTES:
        this.onGotMessageBytes();
        break;
      default:
        this.emitError(new Error(`Unexpected state: ${this.state}`));
        return;
    }
  }

  onGotVersion() {
    const version = this.data.readInt8(0);
    this.data = this.data.slice(1);
    DEBUG(`VERSION IS ${version}`);

    if (version < kMCSVersion && version !== 38) {
      this.emitError(new Error(`Got wrong version: ${version}`));
      return;
    }

    // Process the LoginResponse message tag.
    this.onGotMessageTag();
  }

  onGotMessageTag() {
    this.messageTag = this.data.readInt8(0);
    this.data = this.data.slice(1);
    DEBUG(`RECEIVED PROTO OF TYPE ${this.messageTag}`);

    this.onGotMessageSize();
  }

  onGotMessageSize() {
    let incompleteSizePacket = false;
    const reader = new BufferReader(this.data);

    try {
      this.messageSize = reader.int32();
    } catch (error) {
      if (error.message.startsWith('index out of range:')) {
        incompleteSizePacket = true;
      } else {
        this.emitError(error);
      }
    }

    // TODO(ibash) in chromium code there is an extra check here of:
    // if prev_byte_count >= kSizePacketLenMax then something else went wrong
    // NOTE(ibash) I could only test this case by manually cutting the buffer
    // above to be mid-packet like: new BufferReader(this.data.slice(0, 1))
    if (incompleteSizePacket) {
      this.sizePacketSoFar = reader.pos;
      this.state = MCS_SIZE;
      this.waitForData();
      return;
    }

    this.data = this.data.slice(reader.pos);

    DEBUG(`Proto size: ${this.messageSize}`);
    this.sizePacketSoFar = 0;

    if (this.messageSize > 0) {
      this.state = MCS_PROTO_BYTES;
      this.waitForData();
    } else {
      this.onGotMessageBytes();
    }
  }

  onGotMessageBytes() {
    const protobuf = this.buildProtobufFromTag(this.messageTag);
    if (!protobuf) {
      this.emitError(new Error('Unknown tag'));
      return;
    }

    // Messages with no content are valid; just use the default protobuf for
    // that tag.
    if (this.messageSize === 0) {
      this.emit('message', protobuf);
      this.getNextMessage();
      return;
    }

    if (this.data.length  < this.messageSize) {
      // Continue reading data.
      DEBUG(`Continuing data read. Buffer size is ${this.data.length}, expecting ${this.messageSize}`);
      this.state = MCS_PROTO_BYTES;
      this.waitForData();
      return;
    }

    const buffer = this.data.slice(0, this.messageSize);
    this.data = this.data.slice(this.messageSize);
    const message = protobuf.decode(buffer);
    const object = protobuf.toObject(message, {
      longs : String,
      enums : String,
      bytes : Buffer,
    });

    this.emit('message', object);
    if (this.messageTag === kDataMessageStanzaTag) {
      this.emit('dataMessage', object);
    }

    if (this.messageTag === kLoginResponseTag) {
      if (this.handshakeComplete) {
        console.error('Unexpected login response');
      } else {
        this.handshakeComplete = true;
        DEBUG('GCM Handshake complete.');
      }
    }

    this.getNextMessage();
  }

  getNextMessage() {
    this.messageTag = 0;
    this.messageSize = 0;
    this.state = MCS_TAG_AND_SIZE;
    this.waitForData();
  }

  buildProtobufFromTag(tag) {
    switch(tag) {
      case kHeartbeatPingTag:
        return proto.lookupType('mcs_proto.HeartbeatPing');
      case kHeartbeatAckTag:
        return proto.lookupType('mcs_proto.HeartbeatAck');
      case kLoginRequestTag:
        return proto.lookupType('mcs_proto.LoginRequest');
      case kLoginResponseTag:
        return proto.lookupType('mcs_proto.LoginResponse');
      case kCloseTag:
        return proto.lookupType('mcs_proto.Close');
      case kIqStanzaTag:
        return proto.lookupType('mcs_proto.IqStanza');
      case kDataMessageStanzaTag:
        return proto.lookupType('mcs_proto.DataMessageStanza');
      case kStreamErrorStanzaTag:
        return proto.lookupType('mcs_proto.StreamErrorStanza');
      default:
        return null;
    }
  }
};
