const request = require('request-promise');
const store = require('./src/store/storage.json');

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
        Authorization : `key=${store.keys.serverKey}`,
      },
    });
    console.log(response);
  } catch (e) {
    console.error(e.message);
  }
})();
