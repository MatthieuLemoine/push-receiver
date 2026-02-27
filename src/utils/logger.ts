let debugEnabled = false

export default {
    setDebug: (enabled?: boolean) => {
        debugEnabled = Boolean(enabled)
    },
    log: (...args: unknown[]): void => {
        console.log(...args)
    },
    debug: (...args: unknown[]): void => {
        if (debugEnabled) {
            console.debug(...args)
        }
    },
    warn: (...args: unknown[]): void => {
        console.warn(...args)
    },
    error: console.error,
}