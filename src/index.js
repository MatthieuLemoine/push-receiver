const storage = require('./store/storage.json');
const connect = require('./client');

connect(storage.gcm).catch(console.error);
