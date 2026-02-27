export interface Credentials {
    gcm: GcmData
    fcm: FcmData
    keys: Keys
    config: {
        projectId: string
        vapidKey: string
        bundleId: string
    }

}

export interface InstallationData {
    token: string
    createdAt: number
    expiresIn: number
    refreshToken: string
    fid: string
}

export interface Keys {
    privateKey: string
    publicKey: string
    authSecret: string
}

export interface GcmCheckinResponse {
    androidId: string
    securityToken: string
}

export interface GcmRegisterResponse {
    appId: string
    token: string
}

export type GcmData = GcmCheckinResponse & GcmRegisterResponse

export interface FcmRegistrationResponse {
    name: string
    token: string
    web: {
        applicationPubKey: string
        auth: string
        endpoint: string
        p256dh: string
    }
}

export interface FcmInstallationResponse {
    authToken: {
        expiresIn: string
        token: string
    }
    fid: string
    name: string
    refreshToken: string
}

// TODO: replace this with actual data
export interface FcmData {
    token: string
    installation: InstallationData
}

export type PersistentId = string

export type DisposeFunction = CallableFunction

// table 2b. - https://firebase.google.com/docs/cloud-messaging/http-server-ref
export interface Notification {
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

export interface MessageCustomData {
    [key: string]: unknown
}

// table 1. - https://firebase.google.com/docs/cloud-messaging/http-server-ref
export interface Message {
    to?: string
    registration_ids?: string[]
    condition?: string
    collapse_key?: string
    priority?: 'normal' | 'high'
    content_available?: boolean
    mutable_content?: string // JSON boolean ???
    restricted_package_name?: string
    dry_run?: boolean
    data?: MessageCustomData
    notification?: Notification

    // Not in table, but found in data
    fcmMessageId?: string
    from?: string
}

export interface MessageEnvelope {
    message: Message
    persistentId: string
}

export interface DataPacket<T = any> {
    tag: number
    object: T
}

export interface FirebaseConfig {
    projectId: string
    appId: string
    apiKey: string
    messagingSenderId: string
    authDomain?: string
    databaseURL?: string
    storageBucket?: string
    measurementId?: string
}

export interface ClientConfig {
    credentials?: Credentials
    persistentIds?: PersistentId[]
    bundleId?: string
    chromeId?: string
    /**
     * 1 = Windows
     * 2 = Darwin
     * 3 = Linux
     * 4 = Cros
     * 5 = iOS
     */
    chromePlatform?: number
    /**
     * 1 = stable
     * 2 = beta
     * 3 = dev
     * 4 = canary
     * 5 = unknown
     */
    chromeChannel?: number
    chromeVersion?: string
    timeZone?: string
    debug?: boolean
    vapidKey?: string
    heartbeatIntervalMs?: number
    firebase: FirebaseConfig
}

export interface EventChangeCredentials {
    oldCredentials?: Credentials
    newCredentials: Credentials
}

export interface MessageToSend {
    title: string
    body: string
}
