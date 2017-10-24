// eslint-disable-next-line
require = require('@std/esm')(module, { cjs: true, esm: 'js' });
module.exports = require('./src/index.js').default;
