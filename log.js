const style = require("ansi-styles");
const d = new Date();
const time = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`;

class log {
    static info (message) {
        return console.log(`${time} - ${style.bgGreen.open}INFO${style.bgGreen.close}:`, `${style.green.open}${message}${style.green.close}`);
    }
    static warn (message) {
        return console.log(`${time} - ${style.bgYellow.open}WARN${style.bgYellow.close}:`, `${style.yellow.open}${message}${style.yellow.close}`);
    }
    static error (message) {
        return console.log(`${time} - ${style.bgRed.open}ERROR${style.bgRed.close}:`, `${style.red.open}${message}${style.red.close}`);
    }
    static debug (message) {
        return console.log(`${time} - ${style.bgMagenta.open}DEBUG${style.bgMagenta.close}:`, `${style.magenta.open}${message}${style.magenta.close}`);
    } 
    static custom (title, message) {
        return console.log(`${time} - ${style.bgBlackBright.open}${title}${style.bgBlackBright.close}:`, `${style.white.open}${message}${style.white.close}`);
    }     
}

module.exports = log;
