const request = require('request-promise');

const FCM_ENDPOINT = 'https://fcm.googleapis.com/fcm/connect/subscribe';

module.exports = function registerFCM({ senderId, endpoint, p256dh, auth }) {
  return request({
    url     : FCM_ENDPOINT,
    method  : 'POST',
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded',
    },
    form : {
      authorized_entity : senderId,
      // subscription.endpoint
      endpoint,
      encryption_key    : p256dh,
      encryption_auth   : auth,
    },
  }).then(body => {
    console.log(body);
    const response = JSON.parse(body);
    return response;
  });
};
