const crypto = require('crypto');
const ece = require('http_ece');

module.exports = decrypt;

// https://tools.ietf.org/html/draft-ietf-webpush-encryption-03
function decrypt(object, keys) {
  const cryptoKey = object.appData
    .find(item => item.key === 'crypto-key')
    .value.slice(3);
  const salt = object.appData
    .find(item => item.key === 'encryption')
    .value.slice(5);
  const dh = crypto.createECDH('prime256v1');
  dh.setPrivateKey(keys.privateKey, 'base64');
  const params = {
    version    : 'aesgcm',
    authSecret : keys.authSecret,
    dh         : cryptoKey,
    privateKey : dh,
    salt,
  };
  const decrypted = ece.decrypt(object.rawData, params);
  return JSON.parse(decrypted);
}
