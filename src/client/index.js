const path = require('path');
const protobuf = require('protobufjs');
const Long = require('long');
const { connect: socketConnect } = require('./socket');

module.exports = connect;

async function connect(gcmParams, keys, persistentIds) {
  const proto = await loadProtoFile();
  return login(gcmParams, proto, keys, persistentIds);
}

function loadProtoFile() {
  return protobuf.load(path.join(__dirname, 'mcs.proto'));
}

function login({ androidId, securityToken }, proto, keys, persistentIds = []) {
  const LoginRequestType = proto.lookupType('mcs_proto.LoginRequest');
  const DataMessageStanza = proto.lookupType('mcs_proto.DataMessageStanza');
  const hexAndroidId = Long.fromString(androidId).toString(16);
  const loginRequest = {
    adaptiveHeartbeat    : false,
    authService          : 2,
    authToken            : securityToken,
    id                   : 'chrome-63.0.3234.0',
    domain               : 'mcs.android.com',
    deviceId             : `android-${hexAndroidId}`,
    networkType          : 1,
    resource             : androidId,
    user                 : androidId,
    useRmq2              : true,
    setting              : [{ name : 'new_vc', value : '1' }],
    // Id of the last notification received
    clientEvent          : [],
    // FIXME Figure out how to pass persistentIds without being kickout by Google
    receivedPersistentId : [],
  };
  return socketConnect(
    loginRequest,
    LoginRequestType,
    // FIXME Can change depending on persistentIds
    Buffer.from([41, 2, 149, 1]),
    DataMessageStanza,
    keys,
    persistentIds
  );
}
