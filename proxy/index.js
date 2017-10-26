const tls = require('tls');
const fs = require('fs');
const path = require('path');
const protobuf = require('protobufjs');

const mtalkOptions = {
  key  : fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert : fs.readFileSync(path.join(__dirname, 'cert.pem')),
};
let root;

const server = tls.createServer(mtalkOptions, socket => {
  console.info('socket connected');
  const proxySocket = new tls.TLSSocket();
  let connected = false;
  socket.on('data', data => {
    console.info('SOCKET DATA :');
    try {
      const LoginRequestType = root.lookupType('mcs_proto.LoginRequest');
      console.log(LoginRequestType.decode(data));
    } catch (e) {}
    logBuffer(data);
    console.info('*******');
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
    console.info('Error');
    console.info(error);
  });
  socket.on('end', () => {
    console.info('end');
    proxySocket.end();
  });
  proxySocket.on('close', () => console.warn('Socket closed'));
  proxySocket.on('data', buffer => {
    console.warn('PROXY DATA :');
    logBuffer(buffer);
    console.warn('*******');
    socket.write(buffer);
  });
  proxySocket.on('error', err => {
    console.warn('proxy error');
    console.warn(err);
  });
  proxySocket.on('end', () => {
    console.warn('proxy end');
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
