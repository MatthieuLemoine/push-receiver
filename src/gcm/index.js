import path from 'path';
import request from 'request-promise';
import protobuf from 'protobufjs';
import Long from 'long';
import { resolveTimeout } from '../utils/timeout';
import fcmKey from '../fcm/server-key';
import { toBase64 } from '../utils/base64';
import { saveGCM } from '../store';

const serverKey = toBase64(Buffer.from(fcmKey));

const REGISTER_URL = 'https://android.clients.google.com/c2dm/register3';
const CHECKIN_URL = 'https://android.clients.google.com/checkin';

let root;
let AndroidCheckinResponse;

export async function register(appId) {
  const options = await checkIn();
  const credentials = await doRegister(options, appId);
  await saveGCM(credentials);
  return credentials;
}

export async function checkIn(androidId, securityToken) {
  await loadProtoFile();
  const buffer = getCheckinRequest(androidId, securityToken);
  const body = await request({
    url     : CHECKIN_URL,
    method  : 'POST',
    headers : {
      'Content-Type' : 'application/x-protobuf',
    },
    body     : buffer,
    encoding : null,
  });
  const message = AndroidCheckinResponse.decode(body);
  const object = AndroidCheckinResponse.toObject(message, {
    longs : String,
    enums : String,
    bytes : String,
  });
  await saveGCM({
    androidId     : object.androidId,
    securityToken : object.securityToken,
  });
  return object;
}

async function doRegister({ androidId, securityToken }, appId) {
  const body = {
    app         : 'org.chromium.linux',
    'X-subtype' : appId,
    device      : androidId,
    sender      : serverKey,
  };
  const response = await postRegister({ androidId, securityToken, body });
  const token = response.split('=')[1];
  return {
    token,
    androidId,
    securityToken,
    appId,
  };
}

async function postRegister({ androidId, securityToken, body, retry = 0 }) {
  const response = await request({
    url     : REGISTER_URL,
    method  : 'POST',
    headers : {
      Authorization  : `AidLogin ${androidId}:${securityToken}`,
      'Content-Type' : 'application/x-www-form-urlencoded',
    },
    form : body,
  });
  if (response.includes('Error')) {
    console.warn(`Register request has failed with ${response}`);
    if (retry >= 5) {
      throw new Error('GCM register has failed');
    }
    console.warn(`Retry... ${retry + 1}`);
    await resolveTimeout(1000);
    return postRegister({ androidId, securityToken, body, retry : retry + 1 });
  }
  return response;
}

async function loadProtoFile() {
  if (root) {
    return;
  }
  root = await protobuf.load(path.join(__dirname, 'checkin.proto'));
  return root;
}

function getCheckinRequest(androidId, securityToken) {
  const AndroidCheckinRequest = root.lookupType(
    'checkin_proto.AndroidCheckinRequest'
  );
  AndroidCheckinResponse = root.lookupType(
    'checkin_proto.AndroidCheckinResponse'
  );
  const payload = {
    userSerialNumber : 0,
    checkin          : {
      type        : 3,
      chromeBuild : {
        platform      : 2,
        chromeVersion : '63.0.3234.0',
        channel       : 1,
      },
    },
    version       : 3,
    id            : androidId ? Long.fromString(androidId) : undefined,
    securityToken : securityToken
      ? Long.fromString(securityToken, true)
      : undefined,
  };
  const errMsg = AndroidCheckinRequest.verify(payload);
  if (errMsg) throw Error(errMsg);
  const message = AndroidCheckinRequest.create(payload);
  return AndroidCheckinRequest.encode(message).finish();
}
