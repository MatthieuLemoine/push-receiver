const path = require('path');
const protobuf = require('protobufjs');
const socketConnect = require('./socket');

module.exports = connect;

async function connect({ androidId, securityToken, versionInfo }) {
  const proto = await loadProtoFile();
  const result = await login(androidId, securityToken, versionInfo, proto);
  return result;
}

function loadProtoFile() {
  return protobuf.load(path.join(__dirname, 'mcs.proto'));
}

function login(androidId, securityToken, versionInfo, proto) {
  const LoginRequestType = proto.lookupType('mcs_proto.LoginRequest');
  const loginRequest = {
    adaptiveHeartbeat    : false,
    authService          : 2,
    authToken            : securityToken,
    id                   : 'chrome-63.0.3234.0',
    domain               : 'mcs.android.com',
    deviceId             : `android-${parseInt(androidId, 10).toString(16)}`,
    networkType          : 1,
    resource             : androidId,
    user                 : androidId,
    useRmq2              : true,
    setting              : [{ name : 'new_vc', value : '1' }],
    receivedPersistentId : [],
    clientEvent          : [],
  };
  return socketConnect(
    loginRequest,
    LoginRequestType,
    Buffer.from([41, 2, 149, 1])
  );
}
