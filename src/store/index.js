const path = require('path');
const fs = require('fs');

const DB = path.join(__dirname, 'storage.json');

module.exports = {
  saveFCM,
  saveGCM,
  saveKeys,
};

function saveFCM(fcm) {
  return updateDB('fcm', fcm);
}

function saveGCM(gcm) {
  return updateDB('gcm', gcm);
}

function saveKeys(keys) {
  return updateDB('keys', keys);
}

function updateDB(key, value) {
  return new Promise((resolve, reject) => {
    fs.readFile(DB, (err, content) => {
      if (err) {
        return reject(err);
      }
      const db = JSON.parse(content);
      db[key] = Object.assign({}, db[key], value);
      fs.writeFile(DB, JSON.stringify(db, null, 2), error => {
        if (error) {
          return reject(error);
        }
        resolve(value);
      });
    });
  });
}
