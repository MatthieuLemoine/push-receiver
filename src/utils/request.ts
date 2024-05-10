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
    } catch (e) {
        const timeout = Math.min(retryCount * RETRY_STEP, MAX_RETRY_TIMEOUT)
        Logger.debug(`Request failed : ${e.message}`)
        Logger.debug(`Retrying in ${timeout} seconds`)

        if (retryCount >= maxRetries) throw e

        await delay(timeout * 1000)

        return retry(retryCount + 1, url, options)
    }
}

export const getEndpoint = (config: ClientConfig, baseUrl: string, path = '') => (
    `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}projects/${config.firebase.projectId}/${path}`
)
