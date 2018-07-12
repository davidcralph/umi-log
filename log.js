var d = new Date(),
    t = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`;

module.exports = class log {
    static info (m) { 
        return console.log(`${t} - \x1b[42mINFO\x1b[0m: \x1b[32m${m}\x1b[0m`); 
    }
    static warn (m) { 
        return console.log(`${t} - \x1b[43mWARN\x1b[0m: \x1b[33m${m}\x1b[0m`); 
    }
    static error (m) { 
        return console.log(`${t} - \x1b[41mERROR\x1b[0m: \x1b[31m${m}\x1b[0m`); 
    }
    static debug (m) { 
        return console.log(`${t} - \x1b[45mDEBUG\x1b[0m: \x1b[35m${m}\x1b[0m`); 
    }
    static custom (ti, m) { 
        return console.log(`${t} - \x1b[100m${ti}\x1b[0m: ${m}`); 
    }
}
