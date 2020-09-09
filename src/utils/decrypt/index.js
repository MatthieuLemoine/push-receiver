const crypto = require('crypto');
const ece = require('http_ece');

module.exports = decrypt;

// https://tools.ietf.org/html/draft-ietf-webpush-encryption-03
function decrypt(object, keys) {
  const cryptoKey = object.appData.find(item => item.key === 'crypto-key');
  if (!cryptoKey) throw new Error('crypto-key is missing');
  let getKeyVal = (keyVals, key) => keyVals.includes(key + '=') ?
    keyVals.split(';').filter(keyVal => keyVal.includes(key + '='))[0].split(/=(.+)/)[1] : '';
  const salt = object.appData.find(item => item.key === 'encryption');
  if (!salt) throw new Error('salt is missing');
  const dh = crypto.createECDH('prime256v1');
  dh.setPrivateKey(keys.privateKey, 'base64');
  const params = {
    version    : 'aesgcm',
    authSecret : keys.authSecret,
    dh         : getKeyVal(cryptoKey.value, 'dh'),
    privateKey : dh,
    salt       : getKeyVal(salt.value, 'salt'),
  };
  const decrypted = ece.decrypt(object.rawData, params);
  return JSON.parse(decrypted);
}
