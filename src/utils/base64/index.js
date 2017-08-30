module.exports = {
  escape,
  toBase64,
};

function escape(string) {
  return string
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function toBase64(input) {
  return escape(input.toString('base64'));
}
