import crypto from 'crypto';
import request from 'request-promise';
import { escape } from '../utils/base64';
import { saveKeys, saveFCM } from '../store';

const FCM_SUBSCRIBE = 'https://fcm.googleapis.com/fcm/connect/subscribe';
const FCM_ENDPOINT = 'https://fcm.googleapis.com/fcm/send';

export default async function registerFCM({ senderId, token, appId }) {
  const keys = await createKeys(appId, senderId);
  await saveKeys(keys);
  const response = await request({
    url     : FCM_SUBSCRIBE,
    method  : 'POST',
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded',
    },
    form : {
      authorized_entity : senderId,
      endpoint          : `${FCM_ENDPOINT}/${token}`,
      encryption_key    : keys.publicKey
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_'),
      encryption_auth : keys.authSecret
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_'),
    },
  });
  return saveFCM(JSON.parse(response));
}

function createKeys(appId, authorizedEntity) {
  return new Promise((resolve, reject) => {
    const dh = crypto.createECDH('prime256v1');
    dh.generateKeys();
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        return reject(err);
      }
      return resolve({
        privateKey : escape(dh.getPrivateKey('base64')),
        publicKey  : escape(dh.getPublicKey('base64')),
        authSecret : escape(buf.toString('base64')),
        authorizedEntity,
      });
    });
  });
}
