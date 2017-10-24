export function escape(string) {
  return string
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

export function toBase64(input) {
  return escape(input.toString('base64'));
}
