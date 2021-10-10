import axios, { AxiosRequestConfig } from 'axios'
import delay from './timeout'
import Logger from './logger'

// In seconds
const MAX_RETRY_TIMEOUT = 15

// Step in seconds
const RETRY_STEP = 5

export default function requestWithRety<T>(options: AxiosRequestConfig): Promise<T> {
  return retry<T>(0, options)
}

async function retry<T>(retryCount = 0, options: AxiosRequestConfig): Promise<T> {
  try {
    const response = await axios(options)
    return response.data
  } catch (e) {
    const timeout = Math.min(retryCount * RETRY_STEP, MAX_RETRY_TIMEOUT)
    Logger.verbose(`Request failed : ${e.message}`)
    Logger.verbose(`Retrying in ${timeout} seconds`)

    await delay(timeout * 1000)

    return retry(retryCount + 1, options)
  }
}
