const tls = require('tls');

const HOST = 'mtalk.google.com';
const PORT = 5228;

module.exports = connect;

async function connect(payload, RequestType, preBuffer) {
  const socket = await connectSocket();
  // Payload to send to login with MCS server
  const buffer = toProtoBuf(payload, RequestType);
  socket.write(
    Buffer.concat([preBuffer, buffer], preBuffer.length + buffer.length)
  );
  // Listen for incoming messages
  const result = await listen(socket);
  return result;
}

function connectSocket() {
  return new Promise(resolve => {
    const socket = new tls.TLSSocket();
    socket.setKeepAlive(true);
    socket.on('close', () => console.log('Socket closed'));
    socket.connect(
      {
        host : HOST,
        port : PORT,
      },
      () => resolve(socket)
    );
  });
}

function listen(socket) {
  return new Promise((resolve, reject) => {
    socket.on('data', buffer => {
      console.log(buffer);
    });
    socket.on('error', reject);
    socket.on('end', () => console.log('Socket ended') || resolve());
  });
}

function toProtoBuf(payload, Type) {
  const errMsg = Type.verify(payload);
  if (errMsg) throw Error(errMsg);
  const message = Type.create(payload);
  return Type.encode(message).finish();
}
