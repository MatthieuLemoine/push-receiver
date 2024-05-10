import request from './utils/request'
import type * as Types from './types'

const FCM_API = 'https://fcm.googleapis.com/v1/projects/'

const GOOGLE_TOKEN_AUDIENCE = 'https://accounts.google.com/o/oauth2/token';
const GOOGLE_AUTH_TOKEN_HOST = 'accounts.google.com';
const GOOGLE_AUTH_TOKEN_PATH = '/o/oauth2/token';

const ONE_HOUR_IN_SECONDS = 60 * 60;
const JWT_ALGORITHM = 'RS256';

interface ServiceAccount {
    type: 'service_account'
    project_id: string
    private_key_id: string
    private_key: string
    client_email: string
    client_id: string
    auth_uri: string
    token_uri: string
    auth_provider_x509_cert_url: string
    client_x509_cert_url: string
    universe_domain: string
}

interface GoogleOAuthAccessToken {
    access_token: string;
    expires_in: number;
}

export default class PushSender {
    #projectId: string
    #privateKey: string
    #clientEmail: string
    #accessToken: GoogleOAuthAccessToken & { generated_at: number }

    constructor(serviceAccount: ServiceAccount) {
        this.#projectId = serviceAccount.project_id
        this.#privateKey = serviceAccount.private_key
        this.#clientEmail = serviceAccount.client_email
    }

    createAuthJwt_(): string {
        const claims = {
            scope: [
                'https://www.googleapis.com/auth/cloud-platform',
                'https://www.googleapis.com/auth/firebase.database',
                'https://www.googleapis.com/auth/firebase.messaging',
                'https://www.googleapis.com/auth/identitytoolkit',
                'https://www.googleapis.com/auth/userinfo.email',
            ].join(' '),
        };

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const jwt = require('jsonwebtoken');
        // This method is actually synchronous so we can capture and return the buffer.
        return jwt.sign(claims, this.#privateKey, {
            audience: GOOGLE_TOKEN_AUDIENCE,
            expiresIn: ONE_HOUR_IN_SECONDS,
            issuer: this.#clientEmail,
            algorithm: JWT_ALGORITHM,
        });
    }

    async getAccessToken(): Promise<GoogleOAuthAccessToken> {
        if (this.#accessToken && this.#accessToken.generated_at + this.#accessToken.expires_in > new Date().getTime()) return this.#accessToken;
        
        const token = this.createAuthJwt_();

        const res = await request(`https://${GOOGLE_AUTH_TOKEN_HOST}${GOOGLE_AUTH_TOKEN_PATH}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=' + token,
        })

        const { access_token, expires_in } = await res.json()

        this.#accessToken = {
            access_token,
            expires_in,
            generated_at: new Date().getTime()
        };

        return this.#accessToken
    }

    async send(message: Types.MessageToSend, fcmToken: string): Promise<void> {
        const serverAuthToken = await this.getAccessToken()

        return request(`${FCM_API}${this.#projectId}/messages:send`, {
            method: 'POST',
            body: JSON.stringify({
                message: {
                    notification: message,
                    token: fcmToken
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${serverAuthToken.access_token}`
            })
        }).then(async (response) => {
            const data = await response.json() as { failure: boolean }

            if (data.failure) {
                throw new Error(JSON.stringify(data))
            }
        }).catch(console.error)
    }

    testMessage(fcmToken: string): Promise<void> {
        return this.send({
            body: "PushReceiver test message",
            title: "testMessage",
        }, fcmToken)
    }
}
