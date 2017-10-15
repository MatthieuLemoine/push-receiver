const tls = require('tls');
const fs = require('fs');
const path = require('path');
const protobuf = require('protobufjs');
const { warn, info } = require('../src/logger');

const mtalkOptions = {
  key  : fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert : fs.readFileSync(path.join(__dirname, 'cert.pem')),
};
let root;

const server = tls.createServer(mtalkOptions, socket => {
  info('socket connected');
  const proxySocket = new tls.TLSSocket();
  let connected = false;
  socket.on('data', data => {
    info('SOCKET DATA :');
    try {
      const LoginRequestType = root.lookupType('mcs_proto.LoginRequest');
      console.log(LoginRequestType.decode(data));
    } catch (e) {}
    logBuffer(data);
    info('*******');
    if (connected) {
      proxySocket.write(data);
    } else {
      proxySocket.connect(
        {
          host : '64.233.166.188',
          port : 5228,
        },
        () => {
          connected = true;
          proxySocket.write(data);
        }
      );
    }
  });
  socket.on('error', error => {
    info('Error');
    info(error);
  });
  socket.on('end', () => {
    info('end');
    proxySocket.end();
  });
  proxySocket.on('close', () => warn('Socket closed'));
  proxySocket.on('data', buffer => {
    warn('PROXY DATA :');
    logBuffer(buffer);
    warn('*******');
    socket.write(buffer);
  });
  proxySocket.on('error', err => {
    warn('proxy error');
    warn(err);
  });
  proxySocket.on('end', () => {
    warn('proxy end');
    socket.end();
  });
});
server.listen(5228, () => {
  console.log('server bound');
});

loadProtoFile()
  .then(r => (root = r))
  .catch(console.error);

function loadProtoFile() {
  return protobuf.load(
    path.join(__dirname, '..', 'src', 'client', 'mcs.proto')
  );
}

function logBuffer(buffer) {
  console.log(
    Array.from(buffer.values())
      .reduce((string, item) => `${string} ${item.toString(16)}`, '')
      .slice(1)
  );
}
