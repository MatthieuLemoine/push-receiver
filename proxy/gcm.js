const https = require('https');
const fs = require('fs');
const path = require('path');
const protobuf = require('protobufjs');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const { warn, info } = require('../src/logger');

const HOST = 'https://216.58.198.206';
let root;

const options = {
  key  : fs.readFileSync(path.join(__dirname, 'android_key.pem')),
  cert : fs.readFileSync(path.join(__dirname, 'android_cert.pem')),
};

proxy.on('proxyRes', (proxyRes, req) => {
  proxyRes.on('data', data => {
    info('REQUEST RESPONSE :');
    try {
      if (req.url === '/checkin') {
        const AndroidCheckinResponse = root.lookupType(
          'checkin_proto.AndroidCheckinResponse'
        );
        console.log(AndroidCheckinResponse.decode(data));
      } else if (req.url === '/c2dm/register3') {
        console.log(data.toString('utf8'));
      }
    } catch (e) {
      console.log(e);
      logBuffer(data);
      warn('Error while decoding response');
    }
  });
});

https
  .createServer(options, (req, res) => {
    console.log(req.url);
    req.on('data', data => {
      info('REQUEST DATA :');
      try {
        if (req.url === '/checkin') {
          const AndroidCheckinRequest = root.lookupType(
            'checkin_proto.AndroidCheckinRequest'
          );
          console.log(AndroidCheckinRequest.decode(data));
        } else if (req.url === '/c2dm/register3') {
          console.log(data.toString('utf8'));
        }
      } catch (e) {
        warn('Error while decoding');
      }
      //logBuffer(data);
    });
    proxy.web(req, res, { target : HOST });
  })
  .listen(443);

loadProtoFile()
  .then(r => (root = r))
  .catch(console.error);

function loadProtoFile() {
  return protobuf.load(
    path.join(__dirname, '..', 'src', 'gcm', 'checkin.proto')
  );
}

function logBuffer(buffer) {
  console.log(
    Array.from(buffer.values())
      .reduce((string, item) => `${string} ${item.toString(16)}`, '')
      .slice(1)
  );
}
