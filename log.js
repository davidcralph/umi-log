const colors = require("ansicolors");
const d = new Date();
const time = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`;

class log {
    static info (message) { return console.log(`${time} - ${colors.bgGreen("INFO")}: ${colors.green(message)}`); }
    static notify (message) { return console.log(`${time} - ${colors.bgGreen("INFO")}: ${colors.green(message)}`); }
    static warn (message) { return console.log(`${time} - ${colors.bgYellow("WARN")}: ${colors.yellow(message)}`); }
    static error (message) { return console.log(`${time} - ${colors.bgRed("ERROR")}: ${colors.red(message)}`); }
    static debug (message) { return console.log(`${time} - ${colors.bgMagenta("DEBUG")}: ${colors.magenta(message)}`); } 
    static custom (title, message) { return console.log(`${time} - ${colors.bgBrightBlack(title)}: ${colors.white(message)}`); }     
}

module.exports = log;
