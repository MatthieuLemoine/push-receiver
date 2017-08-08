const https = require('https');
const fs = require('fs');

const options = {
  key  : fs.readFileSync('key.pem'),
  cert : fs.readFileSync('cert.pem'),
};

https
  .createServer(options, (req, res) => {
    console.log(req);
    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(443);
