const assert = require('assert')
const request = require('request-promise')
const {SENDER_ID, SERVER_KEY} = require('./keys')
const {register, listen} = require('../src/index')

const NOTIFICATIONS = {
  SIMPLE: {title: 'Hello world ', body: 'Test'},
  LARGE: {title: 'Hello world ', body: require('./4kb')}
}

describe('Parser', function() {

  beforeEach(async function() {
    let credentials = await register(SENDER_ID)

    this.send = async (notification) => {
      let response = await request({
        method: 'POST',
        url: 'https://fcm.googleapis.com/fcm/send',
        json: true,
        body: {
          to: credentials.fcm.token,
          notification: notification,
        },
        headers: {Authorization : `key=${SERVER_KEY}`},
      })
      assert.equal(response.success, 1, `sending of notification failed: ${JSON.stringify(response)}`)
      return response
    }

    this.receive = async (n) => {
      let received = []
      return new Promise(async (resolve) => {
        let onNotification = (notification) => {
          received.push(notification)
          if (received.length == n) {
            resolve(received)
          }
        }
        credentials.persistentIds = []
        this.client = await listen(credentials, onNotification)
      })
    }
  })

  afterEach(async function() {
    this.client.destroy()
  })

  it('should receive a simple notification', async function() {
    await this.send(NOTIFICATIONS.SIMPLE)
    let notifications = await this.receive(1)
    assert.equal(notifications.length, 1)
    assert.deepEqual(notifications[0].notification.notification, NOTIFICATIONS.SIMPLE)
  })

  it('should receive a large notification', async function() {
    await this.send(NOTIFICATIONS.LARGE)
    let notifications = await this.receive(1)
    assert.equal(notifications.length, 1)
    assert.deepEqual(notifications[0].notification.notification, NOTIFICATIONS.LARGE)
  })

  it('should multiple notifications', async function() {
    await this.send(NOTIFICATIONS.SIMPLE)
    await this.send(NOTIFICATIONS.LARGE)
    await this.send(NOTIFICATIONS.SIMPLE)

    let notifications = await this.receive(3)
    assert.equal(notifications.length, 3)
    assert.deepEqual(notifications[0].notification.notification, NOTIFICATIONS.SIMPLE)
    assert.deepEqual(notifications[1].notification.notification, NOTIFICATIONS.LARGE)
    assert.deepEqual(notifications[2].notification.notification, NOTIFICATIONS.SIMPLE)
  })
})
