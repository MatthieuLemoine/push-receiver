module.exports = {
  waitFor,
};

function waitFor(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
