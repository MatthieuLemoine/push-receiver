import storage from './store/storage.json';
import connect from './client';
import { ON_NOTIFICATION_RECEIVED, addListener } from './client/socket';
import { checkIn } from './gcm';
import { success, info } from './logger';

(async () => {
  try {
    await checkIn(storage.gcm.androidId, storage.gcm.securityToken);
    success('Checked in with GCM');
    addListener(ON_NOTIFICATION_RECEIVED, notification => {
      info('Notification received');
      console.log(notification);
    });
    await connect(storage.gcm);
    success('MCS client connected');
  } catch (e) {
    console.error(e);
  }
})();
