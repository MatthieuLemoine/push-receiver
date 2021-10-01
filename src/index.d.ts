declare module 'push-receiver' {

  export function listen(
    credentials: Credentials,
    notificationCallback: (notification: NotificationEnvelope) => unknown,
  ): Promise<Client>;

  export function register(
    senderId: string,
    options?: {
      bundleId?: string,
      skipFcmRegistration?: boolean,
    },
  ): Promise<Credentials & FcmData>;

  export function register(
    senderId: string,
    options: {
      bundleId?: string,
      skipFcmRegistration?: boolean,
    },
  ): Promise<Credentials>;

  export interface Credentials {
    keys: Keys;
    gcm: GcmData;
    persistentIds: PersistentId[];
  }

  export interface Keys {
    privateKey: string;
    publicKey: string;
    authSecret: string;
  }

  export interface GcmData {
    androidId: string;
    token: string;
    securityToken: string;
  }

  // TODO: replace this with actual data
  export type FcmData = any;

  export type PersistentId = string;

  export interface NotificationEnvelope {
    notification: NotificationContent;
    persistentId: PersistentId;
  }

  // table 2b. - https://firebase.google.com/docs/cloud-messaging/http-server-ref
  export interface NotificationContent {
    title?: string;
    body?: string;
    android_channel_id?: string;
    icon?: string;
    sound?: string;
    tag?: string;
    color?: string;
    click_action?: string;
    body_loc_key?: string;
    body_loc_args?: string; // JSON array as string
    title_loc_key?: string;
    title_loc_args?: string; // JSON array as string
  }

  declare class Client {
    on(event: 'ON_NOTIFICATION_RECEIVED', listener: (notification: NotificationEnvelope) => void): this;
    connect(): Promise<void>;
    destroy(): void;
  }

}
