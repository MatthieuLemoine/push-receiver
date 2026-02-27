export function escape(value: string): string {
    return value
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
}

export function toBase64(value: Buffer): string {
    return escape(value.toString('base64'))
}
