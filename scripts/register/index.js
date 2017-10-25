// eslint-disable-next-line
require = require('@std/esm')(module, { cjs: true, esm: 'js' });
const register = require('../../src').register;
const storage = require('../../src/store/storage.json');

// FIREBASE senderId link to your project
const senderId = storage.fcm.senderId;

(async () => {
  try {
    await register(senderId);
    console.log('Successfully registered');
  } catch (e) {
    console.error('Error during registration');
    console.error(e);
  }
})();
