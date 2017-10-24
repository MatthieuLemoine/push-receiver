import chalk from 'chalk';

export function success(...args) {
  console.log(...args.map(arg => chalk.green(arg)));
}

export function info(...args) {
  console.info(...args.map(arg => chalk.blue(arg)));
}

export function error(...args) {
  console.error(...args.map(arg => chalk.red(arg)));
}

export function warn(...args) {
  console.warn(...args.map(arg => chalk.yellow(arg)));
}

export function debug(...args) {
  console.log(...args);
}

export function logBuffer(buffer) {
  console.log(
    Array.from(buffer.values())
      .reduce((string, item) => `${string} ${item.toString(16)}`, '')
      .slice(1)
  );
}
