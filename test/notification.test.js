const { SENDER_ID, SERVER_KEY } = require('./keys')
const Client = require('../dist/client.js').default

const NOTIFICATIONS = {
    SIMPLE: { title: 'Hello world ', body: 'Test' },
    LARGE: { title: 'Hello world ', body: require('./4kb') },
}

const client = new Client({
    senderId: SENDER_ID,
    logLevel: 'NONE',
    persistentIds: [],
})

let credentials

client.onCredentialsChanged(credentialsChange => {
    credentials = credentialsChange.newCredentials
})

describe('Parser', function () {
    beforeEach(async function () {
        await client.connect()
    })

    it('should receive a simple notification', async function () {
        send(NOTIFICATIONS.SIMPLE)
        const notifications = await receive(1)
        expect(notifications.length).toEqual(1)
        expect(notifications[0].message.data).toEqual(NOTIFICATIONS.SIMPLE)
    })

    it('should receive a large notification', async function () {
        send(NOTIFICATIONS.LARGE)
        const notifications = await receive(1)
        expect(notifications.length).toEqual(1)
        expect(notifications[0].message.data).toEqual(NOTIFICATIONS.LARGE)
    })

    it('should receive multiple notifications', async function () {
        send(NOTIFICATIONS.SIMPLE)
        send(NOTIFICATIONS.LARGE)
        send(NOTIFICATIONS.SIMPLE)

        const notifications = await receive(3)
        expect(notifications.length).toEqual(3)
        expect(notifications[0].message.data).toEqual(NOTIFICATIONS.SIMPLE)
        expect(notifications[1].message.data).toEqual(NOTIFICATIONS.LARGE)
        expect(notifications[2].message.data).toEqual(NOTIFICATIONS.SIMPLE)
    })

    afterEach(() => {
        client.destroy();
    })
})

async function send(notification) {
    try {
        await client.send(notification, SERVER_KEY)
    } catch (e) {
        throw new Error(
            `sending of notification failed: ${e}`
        )
    }
}

async function receive(n) {
    const received = []

    return new Promise((resolve) => {
        client.onNotification(notification => {
            console.log('got notification', notification);

            received.push(notification)

            if (received.length >= n) {
                resolve(received)
            }
        })
    })
}
