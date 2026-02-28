const crypto = require('crypto');
const ece = require('http_ece');
module.exports = decrypt;

// Parses a header value like "dh=BASE64; p256ecdsa=BASE64" into { dh: "BASE64", p256ecdsa: "BASE64" }
function parseHeaderParams(header) {
  return Object.fromEntries(
    header.split(';').map(part => {
      const [key, ...rest] = part.trim().split('=');
      return [key, rest.join('=')];
    })
  );
}

// https://tools.ietf.org/html/draft-ietf-webpush-encryption-03
function decrypt(object, keys) {
  const cryptoKey = object.appData.find(item => item.key === 'crypto-key');
  if (!cryptoKey) throw new Error('crypto-key is missing');
  const salt = object.appData.find(item => item.key === 'encryption');
  if (!salt) throw new Error('salt is missing');

  const cryptoKeyParams = parseHeaderParams(cryptoKey.value);
  const saltParams = parseHeaderParams(salt.value);

  if (!cryptoKeyParams.dh) throw new Error('crypto-key header is missing dh parameter');
  if (!saltParams.salt) throw new Error('encryption header is missing salt parameter');

  const dh = crypto.createECDH('prime256v1');
  dh.setPrivateKey(keys.privateKey, 'base64');
  const params = {
    version    : 'aesgcm',
    authSecret : keys.authSecret,
    dh         : cryptoKeyParams.dh,
    privateKey : dh,
    salt       : saltParams.salt,
  };
  const decrypted = ece.decrypt(object.rawData, params);
  return JSON.parse(decrypted);
}
