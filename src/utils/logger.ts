import { LogLevels } from '../constants'

let logLevel = LogLevels.NONE

export const setLogLevel = (newLogLevel: keyof typeof LogLevels): void => {
    logLevel = LogLevels[newLogLevel]
}

export const verbose = (...args: unknown[]): void => {
    if (logLevel < LogLevels.VERBOSE) return
    console.log('[PUSH_RECEIVER_VERBOSE]', ...args)
}

export const debug = (...args: unknown[]): void => {
    if (logLevel < LogLevels.DEBUG) return
    console.log('[PUSH_RECEIVER_DEBUG]', ...args)
}

export const warn = (...args: unknown[]): void => {
    if (logLevel === LogLevels.NONE) return
    console.warn('[PUSH_RECEIVER_WARNING]', ...args)
}

export const error = console.error

export default {
    setLogLevel,
    verbose,
    debug,
    warn,
    error
}