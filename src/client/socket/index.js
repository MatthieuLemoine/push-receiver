const tls = require('tls');
const EventEmitter = require('events');
const decrypt = require('../../utils/decrypt');

const HOST = 'mtalk.google.com';
const PORT = 5228;

const ON_NOTIFICATION_RECEIVED = 'ON_NOTIFICATION_RECEIVED';

const emitter = new EventEmitter();

module.exports = {
  ON_NOTIFICATION_RECEIVED,
  connect,
  emitter,
};

async function connect(
  payload,
  RequestType,
  preBuffer,
  NotificationSchema,
  keys,
  persistentIds
) {
  const socket = await connectSocket();
  // Payload to send to login with MCS server
  const buffer = toProtoBuf(payload, RequestType);
  socket.write(
    Buffer.concat([preBuffer, buffer], preBuffer.length + buffer.length)
  );
  // Listen for incoming messages
  return listen(socket, NotificationSchema, keys, persistentIds);
}

function connectSocket() {
  return new Promise(resolve => {
    const socket = new tls.TLSSocket();
    socket.setKeepAlive(true);
    socket.on('close', () => console.warn('Socket closed'));
    socket.connect(
      {
        host : HOST,
        port : PORT,
      },
      () => resolve(socket)
    );
  });
}

function listen(socket, NotificationSchema, keys, persistentIds) {
  socket.on('data', buffer =>
    onMessageReceived(buffer, NotificationSchema, keys, persistentIds)
  );
  socket.on('error', error => {
    throw new Error(error);
  });
  socket.on('end', () => console.warn('Socket ended'));
}

function toProtoBuf(payload, Type) {
  const errMsg = Type.verify(payload);
  if (errMsg) throw Error(errMsg);
  const message = Type.create(payload);
  return Type.encode(message).finish();
}

function onMessageReceived(buffer, NotificationSchema, keys, persistentIds) {
  try {
    const object = NotificationSchema.toObject(
      NotificationSchema.decode(buffer),
      {
        longs : String,
        enums : String,
        bytes : Buffer,
      }
    );
    // Already received
    if (persistentIds.includes(object.persistentId)) {
      return;
    }
    const message = decrypt(object, keys);
    if (message) {
      // Send notification
      emitter.emit(ON_NOTIFICATION_RECEIVED, {
        notification : message,
        // Need to be saved by the client
        persistentId : object.persistentId,
      });
    }
  } catch (e) {
    // Not a notification
    return;
  }
}
