const axios = require('axios')
const { SENDER_ID, SERVER_KEY } = require('./keys')
const Client = require('../dist/client.js')

const NOTIFICATIONS = {
    SIMPLE: { title: 'Hello world ', body: 'Test' },
    LARGE: { title: 'Hello world ', body: require('./4kb') },
}

let client
let credentials

describe('Parser', function () {
    beforeEach(async function () {
        client = new Client({
            senderId: SENDER_ID
        })

        client.onCredentialsChanged(credentialsChange => {
            credentials = credentialsChange.newCredentials
        })

        await client.init()
  })

    afterEach(async function () {
        client.destroy()
    })

    it('should receive a simple notification', async function () {
        await send(NOTIFICATIONS.SIMPLE)
        const notifications = await receive(1)
        expect(notifications.length).toEqual(1)
        expect(notifications[0].notification.notification).toEqual(NOTIFICATIONS.SIMPLE)
    })

    it('should receive a large notification', async function () {
        await send(NOTIFICATIONS.LARGE)
        const notifications = await receive(1)
        expect(notifications.length).toEqual(1)
        expect(notifications[0].notification.notification).toEqual(NOTIFICATIONS.LARGE)
    })

    it('should receive multiple notifications', async function () {
        await send(NOTIFICATIONS.SIMPLE)
        await send(NOTIFICATIONS.LARGE)
        await send(NOTIFICATIONS.SIMPLE)

        const notifications = await receive(3)
        expect(notifications.length).toEqual(3)
        expect(notifications[0].notification.notification).toEqual(NOTIFICATIONS.SIMPLE)
        expect(notifications[1].notification.notification).toEqual(NOTIFICATIONS.LARGE)
        expect(notifications[2].notification.notification).toEqual(NOTIFICATIONS.SIMPLE)
    })
})

async function send(notification) {
    const response = await axios({
        method: 'POST',
        url: 'https://fcm.googleapis.com/fcm/send',
        json: true,
        data: {
            to: credentials.fcm.token,
            notification: notification,
        },
        headers: { Authorization: `key=${SERVER_KEY}` },
    })
    try {
        expect(response.success).toEqual(1)
    } catch (e) {
        throw new Error(
            `sending of notification failed: ${JSON.stringify(response)}`
        )
    }
    return response
}

async function receive(n) {
    const received = []
    return new Promise(resolve => {
        client = client.onNotification(notification => {
            received.push(notification)
            if (received.length === n) {
                resolve(received)
            }
        })
    })
}
