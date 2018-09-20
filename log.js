var d = new Date(),
    t = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`,
    c = console;

const log = class {
    constructor() {
        this.hooks = new Map()
    }

    info (m) { 
        if (this.hooks.get("info")) this.hooks.get("info").call(this,m);
        return c.log(`${t} - \x1b[42mINFO\x1b[0m: \x1b[32m${m}\x1b[0m`); 
    }

    warn (m) { 
        if (this.hooks.get("error")) this.hooks.get("warn").call(this,m);
        return c.log(`${t} - \x1b[43mWARN\x1b[0m: \x1b[33m${m}\x1b[0m`);
    }

    error (m) { 
        if (this.hooks.get("error")) this.hooks.get("error").call(this,m);
        return c.log(`${t} - \x1b[41mERROR\x1b[0m: \x1b[31m${m}\x1b[0m`); 
    }

    debug (m) { 
        if (this.hooks.get("debug")) this.hooks.get("debug").call(this,m);
        return c.log(`${t} - \x1b[45mDEBUG\x1b[0m: \x1b[35m${m}\x1b[0m`);
    }

    custom (ti, m) { return c.log(`${t} - \x1b[100m${ti}\x1b[0m: ${m}`); }
    
    addHook (command, cb) { 
        this.hooks.set(command,cb)
    }

}

module.exports = new log()
