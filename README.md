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
npm i -S push-receiver
`

## Requirements

- Node v8 (async/await support)
- Firebase sender id to receive notification
- Firebase serverKey to send notification (optional)

## Usage

### Electron

You can use [electron-push-receiver](https://github.com/MatthieuLemoine/electron-push-receiver) instead which provides a convenient wrapper.

### Node

```javascript
const { register, listen } = require('push-receiver');

// First time
// Register to GCM and FCM
const credentials = await register(senderId); // You should call register only once and then store the credentials somewhere
storeCredentials(credentials) // Store credentials to use it later
const fcmToken = credentials.fcm.token; // Token to use to send notifications
sendTokenToBackendOrWhatever(fcmToken);


// Next times
const credentials = getSavedCredentials() // get your saved credentials from somewhere (file, db, etc...)
// persistentIds is the list of notification ids received to avoid receiving all already received notifications on start.
const persistentIds = getPersistentIds() || [] // get all previous persistentIds from somewhere (file, db, etc...)
await listen({ ...credentials, persistentIds}, onNotification);

// Called on new notification
function onNotification({ notification, persistentId }) {
  // Update list of persistentId in file/db/...
  updatePersistentIds([...persistentIds, persistentId]);
  // Do someting with the notification
  display(notification)
}
```

### Test notification

To test, you can use the [send script](scripts/send/index.js) provided in this repo, you need to pass your serverKey and the FCM token as arguments :

```
node scripts/send --serverKey="<FIREBASE_SERVER_KEY>" --token="<FIREBASE_TOKEN>"
```
