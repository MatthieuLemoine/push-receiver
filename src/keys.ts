import crypto from 'crypto'
import { escape } from './utils/base64'

import type * as Types from './types'

export default function createKeys(): Promise<Types.Keys> {
    return new Promise((resolve, reject) => {
        const dh = crypto.createECDH('prime256v1')

        dh.generateKeys()
        crypto.randomBytes(16, (err, buf) => {
            if (err) {
                return reject(err)
            }

            return resolve({
                privateKey: escape(dh.getPrivateKey('base64')),
                publicKey: escape(dh.getPublicKey('base64')),
                authSecret: escape(buf.toString('base64')),
            })
        })
    })
}