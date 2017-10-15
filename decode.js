const path = require('path');
const protobuf = require('protobufjs');

const data =
  '7 67 10 1 1a 8 32 38 32 37 31 39 41 39 22 f 6d 63 73 2e 61 6e 64 72 6f 69 64 2e 63 6f 6d 2a 37 34 39 33 35 36 31 32 38 31 37 33 34 38 39 38 33 32 31 32 40 6d 63 73 2e 61 6e 64 72 6f 69 64 2e 63 6f 6d 2f 34 39 33 35 36 31 32 38 31 37 33 34 38 39 38 33 32 31 32 3a 4 8 c 12 0 58 ff ff ff ff ff ff ff ff ff 1';

const array = data.split(' ').map(item => parseInt(item, 16));
const buffer = Buffer.from(array);

console.log(buffer);

const types = [
  'HeartbeatPing',
  'HeartbeatAck',
  'ErrorInfo',
  'Setting',
  'HeartbeatStat',
  'HeartbeatConfig',
  'ClientEvent',
  'LoginRequest',
  'LoginResponse',
  'StreamErrorStanza',
  'Close',
  'Extension',
  'IqStanza',
  'AppData',
  'DataMessageStanza',
  'StreamAck',
  'SelectiveAck',
];

(async () => {
  try {
    const schemas = await protobuf.load(
      path.join(__dirname, 'src', 'client', 'mcs.proto')
    );
    console.log(buffer.toString('utf8'));
    types.forEach(type => {
      try {
        const Schema = schemas.lookupType(`mcs_proto.${type}`);
        console.log(Schema.decode(buffer));
      } catch (e) {}
    });
  } catch (e) {
    console.error(e);
  }
})();
