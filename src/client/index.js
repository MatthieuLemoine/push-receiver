const path = require('path');
const protobuf = require('protobufjs');
const Long = require('long');
const { connect: socketConnect } = require('./socket');

module.exports = connect;

async function connect(gcmParams, keys, persistentIds, notificationCallback, loginCallback) {
  const proto = await loadProtoFile();
  return login(gcmParams, proto, keys, persistentIds, notificationCallback, loginCallback);
}

function loadProtoFile() {
  return protobuf.load(path.join(__dirname, 'mcs.proto'));
}

function getProtocol( proto ) {
  const tags = [
    { tag : 0, name : 'HeartbeatPing' },
    { tag : 1, name : 'HeartbeatAck' },
    { tag : 2, name : 'LoginRequest' },
    { tag : 3, name : 'LoginResponse' },
    { tag : 4, name : 'Close' },
    { tag : 7, name : 'IqStanza' },
    { tag : 8, name : 'DataMessageStanza' },
  ];

  return tags.map( tagInfo => ( {
    ...tagInfo,
    type : proto.lookupType(`mcs_proto.${tagInfo.name}`),
  } ) );
}

function login({ androidId, securityToken }, proto, keys, persistentIds = [], notificationCallback, loginCallback) {
  const protocol = getProtocol(proto);

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
    receivedPersistentId : persistentIds,
  };
  return socketConnect(
    loginRequest,
    protocol,
    notificationCallback,
    loginCallback
  );
}
