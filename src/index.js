import storage from './store/storage.json';
import connect from './client';
import { ON_NOTIFICATION_RECEIVED, addListener } from './client/socket';
import { checkIn } from './gcm';

export async function listen(notificationCallback) {
  await checkIn(storage.gcm.androidId, storage.gcm.securityToken);
  addListener(ON_NOTIFICATION_RECEIVED, notificationCallback);
  await connect(storage.gcm);
}

export { default as register } from './register';
