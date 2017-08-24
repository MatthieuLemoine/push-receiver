const tls = require('tls');

const HOST = 'mtalk.google.com';
const PORT = 5228;

module.exports = {
  listening,
  send,
};

function listening() {
  return connect().then(waitingForData).then(buffer => {
    console.log('Listening', buffer);
    return buffer;
  });
}

function send(payload, RequestType, ResponseType) {
  return connect()
    .then(socket => {
      console.log(socket.authorized);
      socket.write(toProtoBuf(payload, RequestType));
      return waitingForData(socket);
    })
    .then(buffer => {
      console.log(buffer);
      console.log(ResponseType.decode(buffer));
      return ResponseType.decode(buffer);
    });
}

function connect() {
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

function waitingForData(socket) {
  return new Promise((resolve, reject) => {
    const buffArray = [];
    socket.on('data', buffer => {
      buffArray.push(buffer);
    });
    socket.on('error', err => {
      console.error(err);
      reject(err);
    });
    socket.on('end', () => {
      const buffer = Buffer.concat(buffArray);
      resolve(buffer);
    });
  });
}

function toProtoBuf(payload, Type) {
  const errMsg = Type.verify(payload);
  if (errMsg) throw Error(errMsg);
  const message = Type.create(payload);
  return Type.encode(message).finish();
}
