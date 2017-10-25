const request = require('request-promise');
const argv = require('yargs').argv;
const store = require('../../src/store/storage.json');

const serverKey = argv.serverKey;

if (!serverKey) {
  console.error('Missing serverKey argument');
  return;
}

(async () => {
  try {
    const response = await request({
      method : 'POST',
      url    : 'https://fcm.googleapis.com/fcm/send',
      json   : true,
      body   : {
        to           : store.fcm.token,
        notification : {
          title : 'Hello world',
          body  : 'Test',
        },
      },
      headers : {
        Authorization : `key=${serverKey}`,
      },
    });
    console.log(response);
  } catch (e) {
    console.error(e.message);
  }
})();
