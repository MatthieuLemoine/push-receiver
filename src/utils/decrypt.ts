import crypto from 'crypto'
import ece from 'http_ece'

import type * as Types from '../types'

interface MessageHeader {
    key: 'crypto-key' | 'encryption'
    value: string
}

interface EncryptedMessage {
    appData: MessageHeader[]
    rawData: Buffer
}

// Parses a header value like "dh=BASE64; p256ecdsa=BASE64" into { dh: "BASE64", p256ecdsa: "BASE64" }
function parseHeaderParams(header: string): Record<string, string> {
    return Object.fromEntries(
        header
            .split(';')
            .map(part => {
                const [key, ...rest] = part.trim().split('=')
                const trimmedKey = key.trim()
                const value = rest.join('=').trim()
                return [trimmedKey, value]
            })
            .filter(([key]) => key !== '')
    )
}

// https://tools.ietf.org/html/draft-ietf-webpush-encryption-03
export default function decrypt<T = Types.MessageEnvelope>(object: EncryptedMessage, keys: Types.Keys): T {
    const cryptoKey = object.appData.find(item => item.key === 'crypto-key')
    if (!cryptoKey) throw new Error('crypto-key is missing')

    const salt = object.appData.find(item => item.key === 'encryption')
    if (!salt) throw new Error('salt is missing')

    const cryptoKeyParams = parseHeaderParams(cryptoKey.value)
    const saltParams = parseHeaderParams(salt.value)

    if (!cryptoKeyParams.dh) throw new Error('crypto-key header is missing dh parameter')
    if (!saltParams.salt) throw new Error('encryption header is missing salt parameter')

    const dh = crypto.createECDH('prime256v1')
    dh.setPrivateKey(keys.privateKey, 'base64')

    const params = {
        version: 'aesgcm',
        authSecret: keys.authSecret,
        dh: cryptoKeyParams.dh,
        privateKey: dh,
        salt: saltParams.salt,
    }
    const decrypted = ece.decrypt(object.rawData, params)

    return JSON.parse(decrypted)
}
