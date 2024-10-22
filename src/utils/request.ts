import delay from './timeout'
import Logger from './logger'
import type { ClientConfig } from '../types'

// In seconds
const MAX_RETRY_TIMEOUT = 15

// Step in seconds
const RETRY_STEP = 5

export default function requestWithRety(url: string, options?: globalThis.RequestInit, maxRetries = 3): Promise<Response> {
    return retry(0, url, options, maxRetries)
}

async function retry(retryCount = 0, url: string, options?: globalThis.RequestInit, maxRetries = 3): Promise<Response> {
    try {
        return await fetch(url, options)
            .then(async (response) => { // Serer responded
                if (response.ok) return response

                // Response not ok. This means server responded but with an error. We retry with increased retry count
                const timeout = Math.min(retryCount * RETRY_STEP, MAX_RETRY_TIMEOUT)

                Logger.debug(`Request failed : ${response.statusText}`)
                Logger.debug(`Retrying in ${timeout} seconds`)

                if (retryCount >= maxRetries) throw response.statusText

                await delay(timeout * 1000)

                return retry(retryCount + 1, url, options)
            })
    } catch (error) {
        Logger.debug('Request failed with network error. Wait 10s and retry')
        // Fetch throws only for network errors. In that case we wait a bit and retry without increasing the count
        await delay(10_000) // 10 seconds
        return retry(retryCount, url, options)
    }
}

export const getEndpoint = (config: ClientConfig, baseUrl: string, path = '') => (
    `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}projects/${config.firebase.projectId}/${path}`
)
