# push-receiver

A library to subscribe to GCM/FCM and receive notifications within a node process.

:construction: WIP !!! Not ready yet ! :warning:

## When should I use `push-receiver` ?

- I want to **receive** push notifications sent using Firebase Cloud Messaging in a [electron](https://github.com/electron/electron) desktop application.
- I want to communicate with a node process/server using Firebase Cloud Messaging infrastructure.

## When should I not use `push-receiver` ?

- I want to **send** push notifications (use the firebase SDK instead)
- your application is running on a FCM supported platform (Android, iOS, Web).

## Install

`
npm i -S push-receiver
`

## Usage

- Register to GCM/FCM (should be run only once)

`
npm run register
`

The register command will store the GCM/FCM credentials in `src/store/storage.json`. To send notifications, to the `push-service` instance, use the `fcm.token` token.

- Listen for notifications

`
npm start
`

- Send a test notification

`
npm run send -- --serverKey="<FIREBASE_SERVER_KEY>"
`

## Features

- [x] Register to GCM
- [x] Register to FCM
- [x] Listen for notifications
- [ ] Lib usage

## Requirements

- Firebase sender id to receive notification
- Firebase serverKey to send notification
