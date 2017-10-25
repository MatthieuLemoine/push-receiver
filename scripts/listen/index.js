const { listen } = require('../../src');

(async () => {
  try {
    await listen();
    console.log('Connected');
  } catch (e) {
    console.error('Error during notification listening');
    console.error(e);
  }
})();
