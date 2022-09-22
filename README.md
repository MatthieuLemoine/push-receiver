# push-receiver

A library to subscribe to GCM/FCM and receive notifications within a node process.

For [Electron](https://github.com/electron/electron), you can use [electron-push-receiver](https://github.com/MatthieuLemoine/electron-push-receiver) instead which provides a convenient wrapper.

See [this blog post](https://medium.com/@MatthieuLemoine/my-journey-to-bring-web-push-support-to-node-and-electron-ce70eea1c0b0) for more details.

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


## Usage

### ClientConfig

```typescript
interface ClientConfig {
    credentials?: Credentials // Will be generated if missing - save this after first use!
    persistentIds?: PersistentId[] // Default - []
    senderId: string // Required
    bundleId?: string // Default - 'receiver.push.com'
    chromeId?: string // Default - 'org.chromium.linux'
    chromeVersion?: string // Default - '94.0.4606.51'
    skipFcmRegistration?: boolean // Default - false
    logLevel?: keyof typeof LogLevels // 'NONE'|'DEBUG'|'VERBOSE' - default: 'NONE'
    vapidKey?: string // Default - default firebase VAPID key
    heartbeatIntervalMs?: number // Default - 5 * 60 * 1000
}
```

### Node example

```javascript
import PushReceiver from '@eneris/push-receiver'
import { argv as parsedArgs } from 'yargs'

if (!parsedArgs.senderId) {
    console.error('Missing senderId')
    return
}

(async () => {
    const instance = new PushReceiver({
        logLevel: parsedArgs.logLevel || 'DEBUG',
        senderId: parsedArgs.senderId,
        persistentIds: [], // Recover stored ids of all previous notifications
    })

    const stopListeningToCredentials = instance.onCredentialsChanged(({ oldCredentials, newCredentials }) => {
        console.log('Client generated new credentials.', newCredentials)
        // Save them somewhere! And decide if thing are needed to re-subscribe
    })

    const stopListeningToNotifications = instance.onNotification(({ notification }) => {
        // Do someting with the notification
        console.log('Notification received', notification)
    })

    await instance.connect()

    if (parsedArgs.serverId) {
        await instance.testMessage(parsedArgs.serverId)
    }

    stopListeningToCredentials()
    stopListeningToNotifications()
    instance.destroy()
})()
```
