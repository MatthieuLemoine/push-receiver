// eslint-disable-next-line
require = require('@std/esm')(module, { cjs: true, esm: 'js' });
const listen = require('../../src').listen;

(async () => {
  try {
    await listen();
    console.log('Connected');
  } catch (e) {
    console.error('Error during notification listening');
    console.error(e);
  }
})();
