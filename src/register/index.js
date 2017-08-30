const randomString = require('crypto-random-string');
const logger = require('../logger');
const registerGCM = require('./gcm');
const registerFCM = require('./fcm');

const appId = randomString(15);
const senderId = '650340851757';

logger.info(`Registration started for app : ${appId}`);

registerGCM(appId)
  .then(subscription => {
    logger.success('GCM registration complete');
    return registerFCM({ token : subscription.token, senderId, appId });
  })
  .then(() => logger.success('FCM registration complete'))
  .catch(error => logger.error(error.message));
