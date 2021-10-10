import { LogLevels } from "./constants"

export interface Credentials {
    keys: Keys
    gcm: GcmData
    fcm: FcmData
}

export interface Keys {
    privateKey: string
    publicKey: string
    authSecret: string
}

export interface GcmData {
    androidId: string
    securityToken: string
    appId?: string
    token?: string
}

// TODO: replace this with actual data
export type FcmData = {
    token: string
    pushSet: string
}

export type PersistentId = string

export type DisposeFunction = CallableFunction

export interface NotificationEnvelope {
    notification: NotificationContent
    persistentId: PersistentId
}

// table 2b. - https://firebase.google.com/docs/cloud-messaging/http-server-ref
export interface NotificationContent {
    title?: string
    body?: string
    android_channel_id?: string
    icon?: string
    sound?: string
    tag?: string
    color?: string
    click_action?: string
    body_loc_key?: string
    body_loc_args?: string // JSON array as string
    title_loc_key?: string
    title_loc_args?: string // JSON array as string
}

export interface ClientConfig {
    credentials?: Credentials
    persistentIds?: PersistentId[]
    senderId: string
    bundleId?: string
    chromeId?: string
    chromeVersion?: string
    skipFcmRegistration?: boolean
    logLevel?: keyof typeof LogLevels
    vapidKey?: string
}

export interface EventChangeCredentials {
    oldCredentials?: Credentials
    newCredentials: Credentials
}