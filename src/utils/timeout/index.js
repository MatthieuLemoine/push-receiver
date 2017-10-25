module.exports = {
  resolveTimeout,
};

function resolveTimeout(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
