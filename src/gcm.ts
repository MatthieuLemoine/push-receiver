import Long from 'long'
import { randomUUID } from 'crypto'
import request from './utils/request'
import delay from './utils/timeout'
import Protos from './protos'
import Logger from './utils/logger'

import type * as Types from './types'

const REGISTER_URL = 'https://android.clients.google.com/c2dm/register3'
const CHECKIN_URL = 'https://android.clients.google.com/checkin'

export default async (config: Types.ClientConfig): Promise<Types.GcmData> => {
    const options = await checkIn(config)
    const credentials = await doRegister(options, config)
    return credentials
}

export async function checkIn(config: Types.ClientConfig): Promise<Types.GcmData> {
    const body = await request<ArrayBuffer>({
        url: CHECKIN_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-protobuf',
        },
        data: prepareCheckinBuffer(config),
        responseType: 'arraybuffer' 
    })

    const AndroidCheckinResponse = Protos.checkin_proto.AndroidCheckinResponse
    const message = AndroidCheckinResponse.decode(new Uint8Array(body))
    const object = AndroidCheckinResponse.toObject(message, {
        longs: String,
        enums: String,
        bytes: String,
    })

    return {
        androidId: object.androidId,
        securityToken: object.securityToken,
    }
}

async function doRegister({ androidId, securityToken }, config: Types.ClientConfig): Promise<Types.GcmData> {
    const appId = `wp:${config.bundleId}#${randomUUID()}`
    const body = (new URLSearchParams({
        app: 'org.chromium.linux',
        'X-subtype': appId,
        device: androidId,
        sender: config.vapidKey,
    })).toString()

    const response = await postRegister({ androidId, securityToken, body })
    const token = response.split('=')[1]

    return {
        token,
        androidId,
        securityToken,
        appId,
    }
}


async function postRegister({ androidId, securityToken, body, retry = 0 }): Promise<string> {
    const response = await request<string>({
        url: REGISTER_URL,
        method: 'POST',
        headers: {
            Authorization: `AidLogin ${androidId}:${securityToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: body,
    })

    if (response.includes('Error')) {
        Logger.warn(`Register request has failed with ${response}`)
        if (retry >= 5) {
            throw new Error('GCM register has failed')
        }

        Logger.warn(`Retry... ${retry + 1}`)
        await delay(1000)
        return postRegister({ androidId, securityToken, body, retry: retry + 1 })
    }

    return response
}

function prepareCheckinBuffer(config: Types.ClientConfig) {
    const gcm = config.credentials?.gcm
    const AndroidCheckinRequest = Protos.checkin_proto.AndroidCheckinRequest

    const payload = {
        userSerialNumber: 0,
        checkin: {
            type: 3,
            chromeBuild: {
                platform: 2,
                chromeVersion: '63.0.3234.0',
                channel: 1,
            },
        },
        version: 3,
        id: gcm?.androidId ? Long.fromString(gcm.androidId) : undefined,
        securityToken: gcm?.securityToken ? Long.fromString(gcm?.securityToken, true) : undefined,
    }

    const errMsg = AndroidCheckinRequest.verify(payload)
    if (errMsg) throw Error(errMsg)

    const message = AndroidCheckinRequest.create(payload)
    return AndroidCheckinRequest.encode(message).finish()
}