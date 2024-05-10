# push-receiver

A library to subscribe to GCM/FCM and receive notifications within a node process.

## When should I use `push-receiver` ?

- I want to **receive** push notifications sent using Firebase Cloud Messaging in an [electron](https://github.com/electron/electron) desktop application.
- I want to communicate with a node process/server using Firebase Cloud Messaging infrastructure.

## When should I not use `push-receiver` ?

- I want to **send** push notifications (use the firebase SDK instead)
- My application is running on a FCM supported platform (Android, iOS, Web).

## Install

`
npm i -S @eneris/push-receiver
`

## Requirements 

- Node v16 (async/await/randomUUID support)
- Firebase sender id to receive notification
- Firebase serverKey to send notification (optional)

## Acknowledgements 
- https://github.com/MatthieuLemoine - for creating initial module on wich uppon in iterated

## Usage

### ClientConfig

```typescript
interface ClientConfig {
    credentials?: Credentials // Will be generated if missing - save this after first use!
    persistentIds?: PersistentId[] // Default - []
    bundleId?: string // Default - 'receiver.push.com'
    chromeId?: string // Default - 'org.chromium.linux'
    chromeVersion?: string // Default - '94.0.4606.51'
    debug?: boolean // Enables debug console logs
    vapidKey?: string // Default - default firebase VAPID key
    heartbeatIntervalMs?: number // Default - 5 * 60 * 1000
    firebase: FirebaseConfig // Full client firebase credentials are now needed
}
```

### Node example

```javascript
import { PushReceiver } from '@eneris/push-receiver'

(async () => {
    const instance = new PushReceiver({
        debug: true,
        persistentIds: [], // Recover stored ids of all previous notifications
        firebase: {
            // ...Firebase web credentials
        },
        credentials: null, // Insert credentials here after the first run
    })

    const stopListeningToCredentials = instance.onCredentialsChanged(({ oldCredentials, newCredentials }) => {
        console.log('Client generated new credentials.', newCredentials)
        // Save them somewhere! And decide if thing are needed to re-subscribe
    })

    const stopListeningToNotifications = instance.onNotification(notification => {
        // Do someting with the notification
        console.log('Notification received', notification)
    })

    await instance.connect()

    
    await instance.connect()

    console.log('connected')

    const sender = new PushSender({
        // Firebase service account credentials here
    })

    console.log('server created')

    await sender.testMessage(instance.config.credentials.fcm.token)

    console.log('message sent')

    stopListeningToCredentials()
    stopListeningToNotifications()

    instance.destroy()
})()
```
