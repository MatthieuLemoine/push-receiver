const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = '216.58.198.206';

const options = {
  key  : fs.readFileSync(path.join(__dirname, 'android_key.pem')),
  cert : fs.readFileSync(path.join(__dirname, 'android_cert.pem')),
};

https
  .createServer(options, (req, res) => {
    console.log(req);
    res.end();
  })
  .listen(443);
