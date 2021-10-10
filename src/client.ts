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
import Protos from './protos'

import { Variables, MCSProtoTag } from './constants';

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
    private persistentIds: Types.PersistentId[]

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
            ...config
        }

        this.persistentIds = this.config.persistentIds
    }

    public on(event: 'ON_NOTIFICATION_RECEIVED', listener: (data: Types.NotificationEnvelope) => void): this
    public on(event: 'ON_CREDENTIALS_CHANGE', listener: (data: Types.EventChangeCredentials) => void): this
    public on(event: 'ON_CONNECT', listener: (data: void) => void): this
    public on(event: 'ON_DISCONNECT', listener: (data: void) => void): this
    public on(event: 'ON_READY', listener: (data: void) => void): this
    public on(event: unknown, listener: unknown): this {
        return EventEmitter.prototype.on.apply(this, [event, listener])
    }

    public off(event: 'ON_NOTIFICATION_RECEIVED', listener: (data: Types.NotificationEnvelope) => void): this
    public off(event: 'ON_CREDENTIALS_CHANGE', listener: (data: Types.EventChangeCredentials) => void): this
    public off(event: 'ON_CONNECT', listener: (data: void) => void): this
    public off(event: 'ON_DISCONNECT', listener: (data: void) => void): this
    public off(event: 'ON_READY', listener: (data: void) => void): this
    public off(event: unknown, listener: unknown): this {
        return EventEmitter.prototype.off.apply(this, [event, listener])
    }

    public emit(event: 'ON_NOTIFICATION_RECEIVED', data: Types.NotificationEnvelope): boolean
    public emit(event: 'ON_CREDENTIALS_CHANGE', data: Types.EventChangeCredentials): boolean
    public emit(event: 'ON_CONNECT'): boolean
    public emit(event: 'ON_DISCONNECT'): boolean
    public emit(event: 'ON_READY'): boolean
    public emit(event: unknown, ...args: unknown[]): boolean {
        Logger.debug('emit', event, ...args)
        return EventEmitter.prototype.emit.apply(this, [event, ...args])
    }

    public onNotification(listener: (data: Types.NotificationEnvelope) => void): Types.DisposeFunction {
        this.on('ON_NOTIFICATION_RECEIVED', listener)
        return () => this.off('ON_NOTIFICATION_RECEIVED', listener)
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

        this.socket = new tls.TLSSocket(null)
        this.socket.setKeepAlive(true)
        this.socket.on('connect', this.handleSocketConnect)
        this.socket.on('close', this.handleSocketClose)
        this.socket.on('error', this.handleSocketError)
        this.socket.connect({ host: HOST, port: PORT })
        this.socket.write(this.loginBuffer())

        this.parser = new Parser(this.socket)
        this.parser.on('message', this.handleMessage)
        this.parser.on('error', this.handleParserError)

        return new Promise((res) => this.onReady(res))
    }


    private destroy = () => {
        clearTimeout(this.retryTimeout)

        if (this.socket) {
            this.socket.destroy()
            this.socket = null
        }

        if (this.parser) {
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

    private handleSocketConnect = (): void => {
        this.retryCount = 0
        this.emit('ON_CONNECT')
    }

    private handleSocketClose = (): void => {
        this.emit('ON_DISCONNECT')
        this.socketRetry()
    }

    private handleSocketError = (err: Error): void => {
        Logger.error(err)
        // ignore, the close handler takes care of retry
    }

    private socketRetry = () => {
        this.destroy()
        const timeout = Math.min(++this.retryCount, MAX_RETRY_TIMEOUT) * 1000
        this.retryTimeout = setTimeout(this.connect, timeout)
    }

    private loginBuffer() {
        const gcm = this.config.credentials.gcm
        const LoginRequestType = Protos.mcs_proto.LoginRequest
        const hexAndroidId = Long.fromString(gcm.androidId).toString(16)
        const loginRequest = {
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
            // Id of the last notification received
            clientEvent: [],
            receivedPersistentId: this.config.persistentIds
        }

        const errorMessage = LoginRequestType.verify(loginRequest)
        if (errorMessage) {
            throw new Error(errorMessage)
        }

        const buffer = LoginRequestType.encodeDelimited(loginRequest).finish()

        return Buffer.concat([
            Buffer.from([Variables.kMCSVersion, MCSProtoTag.kLoginRequestTag]),
            buffer,
        ])
    }

    private handleMessage = ({ tag, object }): void => {
        if (tag === MCSProtoTag.kLoginResponseTag) {
            // clear persistent ids, as we just sent them to the server while logging in
            this.config.persistentIds = []
            this.emit('ON_READY')
        } else if (tag === MCSProtoTag.kDataMessageStanzaTag) {
            this.handleDataMessage(object)
        }
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
            case error.message.includes(
              'Unsupported state or unable to authenticate data'
            ):
            case error.message.includes('crypto-key is missing'):
            case error.message.includes('salt is missing'):
              // NOTE(ibash) Periodically we're unable to decrypt notifications. In
              // all cases we've been able to receive future notifications using the
              // same keys. So, we silently drop this notification.
              console.warn('Message dropped as it could not be decrypted: ' + error.message)
              return
            default: {
              throw error
            }
          }
        }

        // Maintain persistentIds updated with the very last received value
        this.persistentIds.push(object.persistentId)
        // Send notification
        this.emit('ON_NOTIFICATION_RECEIVED', {
            notification: message,
            // Needs to be saved by the client
            persistentId: object.persistentId,
        })
    }

    private handleParserError = (error) => {
        Logger.error(error)
        this.socketRetry()
    }

    public testMessage(serverApiKey: string): Promise<void> {
        Logger.verbose('testMessage')
        if (!serverApiKey) throw new Error('Can\'t test messages without serverApiKey')

        const data = {
            time_to_live: 3,
            data: {
                message: "PushReceiver test message",
                title: "testMessage",
                key: "",
                action: ""
            },
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
}