const chalk = require('chalk');

module.exports = { success, info, error, warn, debug };

function success(...args) {
  console.log(...args.map(arg => chalk.green(arg)));
}

function info(...args) {
  console.info(...args.map(arg => chalk.blue(arg)));
}

function error(...args) {
  console.error(...args.map(arg => chalk.red(arg)));
}

function warn(...args) {
  console.warn(...args.map(arg => chalk.yellow(arg)));
}

function debug(...args) {
  console.log(...args);
}
