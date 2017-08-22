const randomString = require('crypto-random-string');
const registerGCM = require('./register/gcm');
const registerFCM = require('./register/fcm');

const appId = randomString(15);
const senderId = '650340851757';

const p256dh = '';
const auth = '';

registerGCM(appId, senderId)
  .then(subscription =>
    registerFCM({ endpoint : subscription.token, senderId, p256dh, auth })
  )
  .then(() => console.log('Registered'))
  .catch(console.error);
