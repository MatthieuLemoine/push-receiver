# @eneris/push-receiver

## 4.0.1-beta
### Braking changes
- New parametrer `firebase` is now requried in the config - this is used mainly for FCM installation
- FCM `installation` data were added into `fcm` part of `Credentials` containing Firebase Install credentials - Token refreshing is in TODO
- Removed the `logLevel` option and replaced it with `debug: boolean`
- Moved `sentTestMessage` into separate class called `PushSender`

### Major changes
- Replaced `axios` with native `fetch` in Node v20+
- Added `index` export for `PushReceiver` and `PushSender`

## 3.1.0

### Minor Changes

- Added automated Heartbeat messages
  - new option `heartbeatIntervalMs` DEFAULT: 5 * 60 * 1000
  - new events `ON_HEARTBEAT` - this is emited when socket recieves `ping` or `ack` messages

### Patch Changes

- Updated devDependencies