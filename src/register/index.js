import uuidv4 from 'uuid/v4';
import { register as registerGCM } from '../gcm';
import registerFCM from '../fcm';

export default async function register(senderId) {
  // Should be unique by app - One GCM registration/token by app/appId
  const appId = `wp:receiver.push.com#${uuidv4()}`;
  const subscription = await registerGCM(appId);
  await registerFCM({ token : subscription.token, senderId, appId });
}
