const randomString = require('crypto-random-string');
const registerGCM = require('./register/gcm');
const registerFCM = require('./register/fcm');

const appId = randomString(15);
const senderId = '650340851757';
registerGCM(appId)
  .then(subscription =>
    registerFCM({ token : subscription.token, senderId, appId })
  )
  .then(() => console.log('Registered'))
  .catch(console.error);
