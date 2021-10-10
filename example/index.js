const PushReceiver = require('../dist/client.js').default
const yargs = require('yargs/yargs')

const parsedArgs = yargs(process.argv.slice(2)).argv

if (!parsedArgs.senderId) {
    console.error('Missing senderId')
    process.exit(1)
}

const main = async () => {
    const instance = new PushReceiver({
        logLevel: parsedArgs.logLevel || 'DEBUG',
        senderId: parsedArgs.senderId,
        persistentIds: [], // Recover stored ids of all previous notifications
    })

    const stopListeningToCredentials = instance.onCredentialsChanged(({ oldCredentials, newCredentials }) => {
        console.log('Client generated new credentials. Save them somewhere! And decide if thing are needed to re-subscribe', newCredentials)
    })

    const stopListeningToNotifications = instance.onNotification(({ notification }) => {
        // Do someting with the notification
        console.log('Notification received', notification)
    })

    await instance.connect()

    if (parsedArgs.serverKey) {
        await instance.testMessage(parsedArgs.serverKey)
    }
}

main()

