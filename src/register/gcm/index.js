const fs = require('fs');
const path = require('path');
const request = require('request-promise');
const protobuf = require('protobufjs');

const CREDENTIALS_PATH = path.join(__dirname, '..', 'credentials.json');
// google_apis/gcm/engine/registration_request.cc
const REGISTER_URL = 'https://android.clients.google.com/c2dm/register3';
// google_apis/gcm/engine/checkin_request.cc
const CHECKIN_URL = 'https://android.clients.google.com/checkin';
let AndroidCheckinRequest;
let AndroidCheckinResponse;

module.exports = function registerGCM(appId, senderId) {
  return loadProtoFile()
    .then(checkIn)
    .then(options => register(options, appId, senderId));
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

function register({ androidId, securityToken, versionInfo }, appId, senderId) {
  const body = {
    app    : appId,
    // 'X-subtype' : '',
    device : androidId,
    sender : senderId,
  };
  return request({
    url     : REGISTER_URL,
    method  : 'POST',
    headers : {
      Authorization    : `AidLogin ${androidId}:${securityToken}`,
      ['content-type'] : 'application/x-www-form-urlencoded',
    },
    form : body,
  })
    .then(response => response.split('=')[1])
    .then(token => {
      const credentials = {
        token,
        androidId,
        securityToken,
        appId,
        versionInfo,
      };
      fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(credentials, null, 2));
      return credentials;
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
