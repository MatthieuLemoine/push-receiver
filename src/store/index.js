import path from 'path';
import fs from 'fs';

const DB = path.join(__dirname, 'storage.json');

export function saveFCM(fcm) {
  return updateDB('fcm', fcm);
}

export function saveGCM(gcm) {
  return updateDB('gcm', gcm);
}

export function saveKeys(keys) {
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
