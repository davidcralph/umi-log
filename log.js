const d = new Date();
const time = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`;

class log {
    static info (message) { return console.log(`${time} - \x1b[42mINFO\x1b[0m: \x1b[32m${message}\x1b[0m`) }
    static warn (message) { return console.log(`${time} - \x1b[43mWARN\x1b[0m: \x1b[33m${message}\x1b[0m`); }
    static error (message) { return console.log(`${time} - \x1b[41mERROR\x1b[0m: \x1b[31m${message}\x1b[0m`); }
    static debug (message) { return console.log(`${time} - \x1b[45mDEBUG\x1b[0m: \x1b[35m${message}\x1b[0m`); }
    static custom (title, message) { return console.log(`${time} - \x1b[100m${title}\x1b[0m: ${message}`); }
}

module.exports = log;
