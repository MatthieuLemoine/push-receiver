const EventEmitter = require('events');
const Long = require('long');
const Parser = require('./parser');
const decrypt = require('./utils/decrypt');
const path = require('path');
const tls = require('tls');
const { checkIn } = require('./gcm');
const {
  kMCSVersion,
  kLoginRequestTag,
  kDataMessageStanzaTag,
  kLoginResponseTag,
} = require('./constants');
const { load } = require('protobufjs');

const HOST = 'mtalk.google.com';
const PORT = 5228;
const MAX_RETRY_TIMEOUT = 15;

let proto = null;

module.exports = class Client extends EventEmitter {
  static async init() {
    if (proto) {
      return;
    }
    proto = await load(path.resolve(__dirname, 'mcs.proto'));
  }

  constructor(credentials, persistentIds) {
    super();
    this._credentials = credentials;
    this._persistentIds = persistentIds || [];
    this._retryCount = 0;
    this._onSocketConnect = this._onSocketConnect.bind(this);
    this._onSocketClose = this._onSocketClose.bind(this);
    this._onSocketError = this._onSocketError.bind(this);
    this._onMessage = this._onMessage.bind(this);
    this._onParserError = this._onParserError.bind(this);
  }

  async connect() {
    await Client.init();
    await this._checkIn();
    this._connect();
    // can happen if the socket immediately closes after being created
    if (!this._socket) {
      return;
    }
    await Parser.init();
    // can happen if the socket immediately closes after being created
    if (!this._socket) {
      return;
    }
    this._parser = new Parser(this._socket);
    this._parser.on('message', this._onMessage);
    this._parser.on('error', this._onParserError);
  }

  destroy() {
    this._destroy();
  }

  async _checkIn() {
    return checkIn(
      this._credentials.gcm.androidId,
      this._credentials.gcm.securityToken
    );
  }

  _connect() {
    this._socket = new tls.TLSSocket();
    this._socket.setKeepAlive(true);
    this._socket.on('connect', this._onSocketConnect);
    this._socket.on('close', this._onSocketClose);
    this._socket.on('error', this._onSocketError);
    this._socket.connect({ host : HOST, port : PORT });
    this._socket.write(this._loginBuffer());
  }

  _destroy() {
    clearTimeout(this._retryTimeout);
    if (this._socket) {
      this._socket.removeListener('connect', this._onSocketConnect);
      this._socket.removeListener('close', this._onSocketClose);
      this._socket.removeListener('error', this._onSocketError);
      this._socket.destroy();
      this._socket = null;
    }
    if (this._parser) {
      this._parser.removeListener('message', this._onMessage);
      this._parser.removeListener('error', this._onParserError);
      this._parser.destroy();
      this._parser = null;
    }
  }

  _loginBuffer() {
    const LoginRequestType = proto.lookupType('mcs_proto.LoginRequest');
    const hexAndroidId = Long.fromString(
      this._credentials.gcm.androidId
    ).toString(16);
    const loginRequest = {
      adaptiveHeartbeat    : false,
      authService          : 2,
      authToken            : this._credentials.gcm.securityToken,
      id                   : 'chrome-63.0.3234.0',
      domain               : 'mcs.android.com',
      deviceId             : `android-${hexAndroidId}`,
      networkType          : 1,
      resource             : this._credentials.gcm.androidId,
      user                 : this._credentials.gcm.androidId,
      useRmq2              : true,
      setting              : [{ name : 'new_vc', value : '1' }],
      // Id of the last notification received
      clientEvent          : [],
      receivedPersistentId : this._persistentIds,
    };

    const errorMessage = LoginRequestType.verify(loginRequest);
    if (errorMessage) {
      throw new Error(errorMessage);
    }

    const buffer = LoginRequestType.encodeDelimited(loginRequest).finish();

    return Buffer.concat([
      Buffer.from([kMCSVersion, kLoginRequestTag]),
      buffer,
    ]);
  }

  _onSocketConnect() {
    this._retryCount = 0;
    this.emit('connect');
  }

  _onSocketClose() {
    this.emit('disconnect')
    this._retry();
  }

  _onSocketError(error) {
    // ignore, the close handler takes care of retry
    console.error(error);
  }

  _onParserError(error) {
    this._retry();
    console.error(error);
  }

  _retry() {
    this._destroy();
    const timeout = Math.min(++this._retryCount, MAX_RETRY_TIMEOUT) * 1000;
    this._retryTimeout = setTimeout(this.connect.bind(this), timeout);
  }

  _onMessage({ tag, object }) {
    if (tag === kLoginResponseTag) {
      // clear persistent ids, as we just sent them to the server while logging
      // in
      this._persistentIds = [];
    } else if (tag === kDataMessageStanzaTag) {
      this._onDataMessage(object);
    }
  }

  _onDataMessage(object) {
    if (this._persistentIds.includes(object.persistentId)) {
      return;
    }

    let message;
    try {
      message = decrypt(object, this._credentials.keys);
    } catch (error) {
      switch (true) {
        case error.message.includes(
          'Unsupported state or unable to authenticate data'
        ):
        case error.message.includes('crypto-key is missing'):
        case error.message.includes('salt is missing'):
          // NOTE(ibash) Periodically we're unable to decrypt notifications. In
          // all cases we've been able to receive future notifications using the
          // same keys. So, we silently drop this notification.
          console.warn(
            'Message dropped as it could not be decrypted: ' + error.message
          );
          this._persistentIds.push(object.persistentId);
          return;
        default: {
          throw error;
        }
      }
    }

    // Maintain persistentIds updated with the very last received value
    this._persistentIds.push(object.persistentId);
    // Send notification
    this.emit('ON_NOTIFICATION_RECEIVED', {
      notification : message,
      // Needs to be saved by the client
      persistentId : object.persistentId,
    });
  }
};
