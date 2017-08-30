const path = require('path');
const request = require('request-promise');
const protobuf = require('protobufjs');
const logger = require('../../logger');
const { resolveTimeout } = require('../../utils/timeout');
const fcmKey = require('../fcm/server-key');
const { toBase64 } = require('../../utils/base64');
const { saveGCM } = require('../../store');

const serverKey = toBase64(Buffer.from(fcmKey));

const REGISTER_URL = 'https://android.clients.google.com/c2dm/register3';
const CHECKIN_URL = 'https://android.clients.google.com/checkin';

let AndroidCheckinRequest;
let AndroidCheckinResponse;

module.exports = function registerGCM(appId) {
  return loadProtoFile()
    .then(checkIn)
    .then(options => register(options, appId));
};

function checkIn(buffer) {
  return request({
    url     : CHECKIN_URL,
    method  : 'POST',
    headers : {
      ['content-type'] : 'application/x-protobuf',
    },
    body     : buffer,
    encoding : null,
  }).then(body => {
    const message = AndroidCheckinResponse.decode(body);
    const object = AndroidCheckinResponse.toObject(message, {
      longs : String,
      enums : String,
      bytes : String,
    });
    return object;
  });
}

function register({ androidId, securityToken, versionInfo }, appId) {
  const body = {
    app         : 'org.chromium.linux',
    'X-subtype' : appId,
    device      : androidId,
    sender      : serverKey,
    // gmsv        : '62.0.3180.0',
    // appid       : appId,
    // scope       : '',
    // 'X-scope'   : '',
  };
  return postRegister({ androidId, securityToken, body })
    .then(response => response.split('=')[1])
    .then(token => {
      const credentials = {
        token,
        androidId,
        securityToken,
        appId,
        versionInfo,
      };
      return saveGCM(credentials);
    });
}

function postRegister({ androidId, securityToken, body, retry = 0 }) {
  return request({
    url     : REGISTER_URL,
    method  : 'POST',
    headers : {
      Authorization    : `AidLogin ${androidId}:${securityToken}`,
      ['content-type'] : 'application/x-www-form-urlencoded',
    },
    form : body,
  }).then(response => {
    if (response.includes('Error')) {
      logger.warn(`Register request has failed with ${response}`);
      if (retry >= 5) {
        throw new Error('GCM register has failed');
      }
      logger.warn(`Retry... ${retry + 1}`);
      return resolveTimeout(1000).then(() =>
        postRegister({ androidId, securityToken, body, retry : retry + 1 })
      );
    }
    return response;
  });
}

function loadProtoFile() {
  return protobuf.load(path.join(__dirname, 'checkin.proto')).then(root => {
    AndroidCheckinRequest = root.lookupType(
      'checkin_proto.AndroidCheckinRequest'
    );
    AndroidCheckinResponse = root.lookupType(
      'checkin_proto.AndroidCheckinResponse'
    );
    const payload = { checkin : { type : 3 }, version : 2 };
    const errMsg = AndroidCheckinRequest.verify(payload);
    if (errMsg) throw Error(errMsg);
    const message = AndroidCheckinRequest.create(payload);
    return AndroidCheckinRequest.encode(message).finish();
  });
}
