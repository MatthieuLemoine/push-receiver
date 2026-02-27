const {
    PushReceiver,
    PushSender,
} = require('./dist');

(async () => {
    const client = new PushReceiver({
        debug: true,
        persistentIds: [],
        firebase: /* Insert firebase config here */,
        credentials: null
    })

    await client.connect();

    client.on('ON_MESSAGE_RECEIVED', console.log)

    const sender = new PushSender(/* FIREBASE SERVICE ACCOUNT JSON */);

    sender.testMessage(client.fcmToken);
})()
