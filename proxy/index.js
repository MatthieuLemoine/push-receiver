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
  console.log('socket connected');
  console.log(socket.servername);
  //socket.pipe(socket);
  socket.on('data', data => {
    console.log('On data');
    console.log(data);
    const LoginRequestType = root.lookupType('mcs_proto.LoginRequest');
    console.log(LoginRequestType.decode(data));
    const proxySocket = new tls.TLSSocket();
    const buffArray = [];
    proxySocket.on('close', () => console.log('Socket closed'));
    proxySocket.on('data', buffer => {
      console.log('proxy data');
      console.log(buffer);
      socket.write(buffer);
    });
    proxySocket.on('error', err => {
      console.error('proxy error');
      console.error(err);
    });
    proxySocket.on('end', () => {
      const buffer = Buffer.concat(buffArray);
      console.log('proxy end');
      console.log(buffer);
      // console.log(LoginResponseType.decode(buffer));
      socket.end();
    });
    proxySocket.connect(
      {
        host : '64.233.166.188',
        port : 5228,
      },
      () => proxySocket.write(data)
    );
    // writeResponse(socket);
  });
  socket.on('error', error => {
    console.error('Error');
    console.error(error);
  });
  socket.on('end', () => console.log('end'));
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
