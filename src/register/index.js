import uuidv4 from 'uuid/v4';
import { info, success, error } from '../logger';
import { register as registerGCM } from '../gcm';
import registerFCM from '../fcm';
import storage from '../store/storage.json';

// Should be unique by app - One GCM registration/token by app/appId
const appId = `wp:receiver.push.com#${uuidv4()}`;
// FIREBASE senderId link to your project
const senderId = storage.fcm.senderId;

info(`Registration started for app : ${appId}`);

(async () => {
  try {
    const subscription = await registerGCM(appId);
    success('GCM registration complete');
    await registerFCM({ token : subscription.token, senderId, appId });
    success('FCM registration complete');
  } catch (e) {
    error(e.message);
  }
})();
