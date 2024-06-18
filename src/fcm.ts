import crypto from 'crypto'
import request, { getEndpoint } from './utils/request'

import type * as Types from './types'

const FCM_API = 'https://fcm.googleapis.com/'
const FCM_REGISTRATION = 'https://fcmregistrations.googleapis.com/v1/'
const FCM_INSTALLATION = 'https://firebaseinstallations.googleapis.com/v1/'
const AUTH_VERSION = 'FIS_v2'
const SDK_VERSION = 'w:0.6.6'
const DEFAULT_VAPID = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4'

// TODO: FIXME it is optional to send it but better to implement proper heatbeat in the future
const getEmptyHeatbeat = () => btoa(JSON.stringify({ heartbeats: [], version: 2 })).toString()

function generateFirebaseFID() {
    // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
    // bytes. our implementation generates a 17 byte array instead.
    const fid = crypto.randomBytes(17)

    // Replace the first 4 random bits with the constant FID header of 0b0111.
    fid[0] = 0b01110000 + (fid[0] % 0b00010000)

    return fid.toString('base64')
}

function encodeBase64URL(value: string): string {
    return String(value).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

// TODO: Installation token expires after 7 days. It should be refreshed but requests are failing (404)
// export async function refreshFCMInstallationToken(fcmData: Types.FcmData, config: Types.ClientConfig) {
//     const response = await request(getEndpoint(config, FCM_INSTALLATION, `${fcmData.fid}/authTokens:generate`), {
//         method: 'POST',
//         headers: new Headers({
//             Authorization: `${AUTH_VERSION} ${fcmData.refreshToken}`,
//             'x-firebase-client': getEmptyHeatbeat(),
//         }),
//         body: JSON.stringify({
//             installation: {
//                 sdkVersion: SDK_VERSION,
//                 appId: config.firebase.appId,
//             }
//         })
//     })
//     const data = await response.json()
//     return data
// }

export async function installFCM(config: Types.ClientConfig): Promise<Types.InstallationData> {
    const response = await request(getEndpoint(config, FCM_INSTALLATION, 'installations'), {
        method: 'POST',
        headers: {
            'x-firebase-client': getEmptyHeatbeat(),
            'x-goog-api-key': config.firebase.apiKey
        },
        body: JSON.stringify({
            appId: config.firebase.appId,
            authVersion: AUTH_VERSION,
            fid: generateFirebaseFID(),
            sdkVersion: SDK_VERSION
        }),
    })

    const data = await response.json() as Types.FcmInstallationResponse

    return {
        token: data.authToken.token,
        createdAt: (new Date()).getTime(), // in ms
        expiresIn: Number.parseInt(data.authToken.expiresIn) * 1000, // in ms
        refreshToken: data.refreshToken,
        fid: data.fid,
    }
}

export async function registerFCM(gcmData: Types.GcmData, installation: Types.InstallationData, keys: Types.Keys, config: Types.ClientConfig): Promise<Types.FcmRegistrationResponse> {
    const requestOptions = {
        method: 'POST',
        headers: {
            'x-goog-api-key': config.firebase.apiKey,
            'x-goog-firebase-installations-auth': installation.token,
        },
        body: JSON.stringify({
            web: {
                // Include VAPID only if it's not default key, otherwise FCM registration will fail
                applicationPubKey: config.vapidKey || undefined,
                auth: encodeBase64URL(keys.authSecret),
                /**
                 * TODO
                 * Shouldn't endpoint be migrated to v1 too??? But official JS module still uses the old one...
                 * https://firebase.google.com/docs/cloud-messaging/migrate-v1
                 * Currently not working with
                 * Works - https://fcm.googleapis.com/fcm/send
                 * Does not work - https://fcm.googleapis.com/v1/projects/{projectId}/messages:send
                 */
                endpoint: `${FCM_API}fcm/send/${gcmData.token}`,
                p256dh: encodeBase64URL(keys.publicKey),
            }
        })
    }

    const response = await request(getEndpoint(config, FCM_REGISTRATION, 'registrations'), requestOptions)

    const data = await response.json()

    if (data.error) {
        throw new Error('FCM registration failed... ' + data.error.message)
    }

    return data
}

export default async function register(gcm: Types.GcmData, keys: Types.Keys, config: Types.ClientConfig): Promise<Types.FcmData> {
    const installation = await installFCM(config)
    const registration = await registerFCM(gcm, installation, keys, config)

    return {
        token: registration.token,
        installation
    }
}