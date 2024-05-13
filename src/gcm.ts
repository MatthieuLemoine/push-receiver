import Long from 'long'
import { randomUUID } from 'crypto'
import request from './utils/request'
import delay from './utils/timeout'
import Protos from './protos'
import Logger from './utils/logger'

import type * as Types from './types'
import { toBase64 } from './utils/base64'

const REGISTER_URL = 'https://android.clients.google.com/c2dm/register3'
const CHECKIN_URL = 'https://android.clients.google.com/checkin'
const REGISTER_SERVER_KEY = [
    0x04, 0x33, 0x94, 0xf7, 0xdf, 0xa1, 0xeb, 0xb1, 0xdc, 0x03, 0xa2, 0x5e, 0x15, 0x71, 0xdb, 0x48, 0xd3, 0x2e, 0xed, 0xed, 0xb2, 0x34, 0xdb, 0xb7, 0x47, 0x3a,
    0x0c, 0x8f, 0xc4, 0xcc, 0xe1, 0x6f, 0x3c, 0x8c, 0x84, 0xdf, 0xab, 0xb6, 0x66, 0x3e, 0xf2, 0x0c, 0xd4, 0x8b, 0xfe, 0xe3, 0xf9, 0x76, 0x2f, 0x14, 0x1c, 0x63,
    0x08, 0x6a, 0x6f, 0x2d, 0xb1, 0x1a, 0x95, 0xb0, 0xce, 0x37, 0xc0, 0x9c, 0x6e,
]

function parseLong(number: bigint, unsigned?: boolean | number, radix?: number): Long {
    return Long.fromString(number.toString(), unsigned, radix)
}

export default async (config: Types.ClientConfig): Promise<Types.GcmData> => {
    const options = await checkIn(config)
    const credentials = await doRegister(options, config)
    return credentials
}

export async function checkIn(config: Types.ClientConfig): Promise<Types.GcmCheckinResponse> {
    const body = await (await request(CHECKIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-protobuf',
        },
        body: prepareCheckinBuffer(config),
    })).arrayBuffer()
    

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

async function doRegister({ androidId, securityToken }: Types.GcmCheckinResponse, config: Types.ClientConfig): Promise<Types.GcmData> {
    const appId = `wp:${config.bundleId}#${randomUUID()}`
    const body = (new URLSearchParams({
        app: 'org.chromium.linux',
        'X-subtype': appId,
        device: androidId,
        sender: config.vapidKey, // toBase64(Buffer.from(REGISTER_SERVER_KEY)),
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


async function postRegister({ androidId, securityToken, body, retry = 0 }: {
    androidId: Types.GcmData['androidId']
    securityToken: Types.GcmData['securityToken']
    body: string
    retry?: number
}): Promise<string> {
    const response = await (await request(REGISTER_URL, {
        method: 'POST',
        headers: {
            Authorization: `AidLogin ${androidId}:${securityToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
    })).text()

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

    const payload: Protos.checkin_proto.IAndroidCheckinRequest = {
        accountCookie: [],
        checkin: {
            cellOperator: '', // Optional
            chromeBuild: {
                platform: config.chromePlatform || Protos.checkin_proto.ChromeBuildProto.Platform.PLATFORM_MAC,
                chromeVersion: config.chromeVersion || '63.0.3234.0',
                channel: config.chromeChannel || Protos.checkin_proto.ChromeBuildProto.Channel.CHANNEL_STABLE,
            },
            type: Protos.checkin_proto.DeviceType.DEVICE_CHROME_BROWSER,
            lastCheckinMsec: parseLong(0n), // TODO
            roaming: '', // Optional
            simOperator: '', // Optional
            userNumber: 0, // Optional
        },
        desiredBuild: '', // Optional
        digest: '', // Optional
        fragment: 0,
        id: gcm?.androidId ? Long.fromString(gcm.androidId) : undefined,
        locale: '', // Optional
        loggingId: parseLong(0n), // Optional
        macAddr: [],
        macAddrType: [],
        marketCheckin: '', // Optional
        otaCert: [],
        securityToken: gcm?.securityToken ? Long.fromString(gcm?.securityToken, true) : undefined,
        timeZone: config.timeZone || 'Europe/Prague',
        userName: '', // Optional
        userSerialNumber: 0, // TODO
        version: 3, // TODO - ???
    }

    const errMsg = AndroidCheckinRequest.verify(payload)
    if (errMsg) throw Error(errMsg)

    const message = AndroidCheckinRequest.create(payload)
    return AndroidCheckinRequest.encode(message).finish()
}
