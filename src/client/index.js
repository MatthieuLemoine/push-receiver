const path = require('path');
const protobuf = require('protobufjs');
const { send, listening } = require('./socket');

module.exports = {
  connect,
};

function connect({ androidId, securityToken, versionInfo }) {
  return loadProtoFile()
    .then(root => login({ androidId, securityToken, versionInfo, root }))
    .then(response => {
      listening().catch(console.error);
      return response;
    });
}

function loadProtoFile() {
  return protobuf.load(path.join(__dirname, 'mcs.proto'));
}

function login({ androidId, securityToken, versionInfo, root }) {
  const LoginRequestType = root.lookupType('mcs_proto.LoginRequest');
  const LoginResponseType = root.lookupType('mcs_proto.LoginResponse');
  const loginRequest = {
    adaptive_heartbeat : false,
    authService        : 2,
    authToken          : securityToken,
    id                 : `chrome-${versionInfo}`,
    domain             : 'mcs.android.com',
    deviceId           : `android-${androidId.toString('hex')}`,
    networkType        : 1,
    resource           : androidId,
    user               : androidId,
    useRmq2            : true,
    setting            : [
      { name : 'new_vc', value : '1' },
      { name : 'hbping', value : `${1000 * 60 * 2}` },
    ],
  };
  return send(loginRequest, LoginRequestType, LoginResponseType);
}
