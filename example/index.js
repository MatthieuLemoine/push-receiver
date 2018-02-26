const { register, listen } = require('../src');
const senderId = require('yargs').argv.senderId;

if (!senderId) {
  console.error('Missing senderId');
  return;
}

(async () => {
  // First time
  // Register to GCM and FCM
  const credentials = await register(senderId); // You should call register only once and then store the credentials somewhere
  const fcmToken = credentials.fcm.token; // Token to use to send notifications
  console.log('Use this following token to send a notification', fcmToken);
  // persistentIds is the list of notification ids received to avoid receiving all already received notifications on start.
  const persistentIds = []; // get all previous persistentIds from somewhere (file, db, etc...)
  await listen({ ...credentials, persistentIds }, onNotification);
})();

// Called on new notification
function onNotification({ notification }) {
  // Do someting with the notification
  console.log('Notification received');
  console.log(notification);
}
