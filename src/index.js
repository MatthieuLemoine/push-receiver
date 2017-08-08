const request = require('request-promise');

const REGISTER_URL = 'https://android.clients.google.com/c2dm/register3';

request({
  url     : REGISTER_URL,
  method  : 'POST',
  headers : {
    Authorization    : 'AidLogin',
    ['content-type'] : 'application/x-www-form-urlencoded',
  },
  body : '',
})
  .then(console.log)
  .catch(console.error);
