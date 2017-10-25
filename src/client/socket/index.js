import tls from 'tls';
import EventEmitter from 'events';
import decrypt from '../../utils/decrypt';
import { saveGCM } from '../../store';

const HOST = 'mtalk.google.com';
const PORT = 5228;

export const ON_NOTIFICATION_RECEIVED = 'ON_NOTIFICATION_RECEIVED';

const emitter = new EventEmitter();

export function addListener(event, listener) {
  emitter.on(event, listener);
}

export default async function connect(
  payload,
  RequestType,
  preBuffer,
  NotificationSchema
) {
  const socket = await connectSocket();
  // Payload to send to login with MCS server
  const buffer = toProtoBuf(payload, RequestType);
  socket.write(
    Buffer.concat([preBuffer, buffer], preBuffer.length + buffer.length)
  );
  // Listen for incoming messages
  return listen(socket, NotificationSchema);
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

function listen(socket, NotificationSchema) {
  socket.on('data', buffer => onMessageReceived(buffer, NotificationSchema));
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

function onMessageReceived(buffer, NotificationSchema) {
  try {
    const object = NotificationSchema.toObject(
      NotificationSchema.decode(buffer),
      {
        longs : String,
        enums : String,
        bytes : Buffer,
      }
    );
    const message = decrypt(object);
    if (message) {
      console.log('*** Notification received ***');
      console.log(message);
      // Update last notification id
      saveGCM({ persistentId : object.persistentId });
      // Send notification
      emitter.emit(ON_NOTIFICATION_RECEIVED, buffer);
    }
  } catch (e) {
    // Not a notification
    return;
  }
}
