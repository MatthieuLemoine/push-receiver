const connect = require('./client');
const { checkIn } = require('./gcm');
const register = require('./register');

module.exports = {
  listen,
  register,
};

async function listen(credentials, notificationCallback, loginCallback) {
  if (!credentials) {
    throw new Error('Missing credentials');
  }
  if (!credentials.gcm) {
    throw new Error('Missing gcm object in credentials');
  }
  if (!credentials.gcm.androidId) {
    throw new Error('Missing gcm.androidId in credentials');
  }
  if (!credentials.gcm.securityToken) {
    throw new Error('Missing gcm.securityToken in credentials');
  }
  if (!credentials.keys) {
    throw new Error('Missing keys object in credentials');
  }
  if (!credentials.keys.privateKey) {
    throw new Error('Missing keys.privateKey in credentials');
  }
  if (!credentials.keys.authSecret) {
    throw new Error('Missing keys.authSecret in credentials');
  }
  await checkIn(credentials.gcm.androidId, credentials.gcm.securityToken);
  return await connect(
    credentials.gcm,
    credentials.keys,
    credentials.persistentIds,
    notificationCallback,
    loginCallback
  );
}
