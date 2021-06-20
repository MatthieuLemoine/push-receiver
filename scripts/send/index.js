const axios = require('axios');
const argv = require('yargs').argv;

const serverKey = argv.serverKey;
const token = argv.token;

if (!serverKey) {
  console.error('Missing serverKey argument');
  return;
}

if (!token) {
  console.error('Missing token argument');
  return;
}

(async () => {
  try {
    const response = await axios({
      url  : 'https://fcm.googleapis.com/fcm/send',
      data : {
        to           : token,
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
