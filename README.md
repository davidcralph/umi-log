<h1 align="center">
<img src="https://i.imgur.com/EGufGSa.png" alt="Umi-Log">
</h1>

# Umi-Log

Lightweight, easy-to-use and customizable console logger.

**Features**

* Timestamp 

* Colours

* Lightweight

* Customizable

* (NEW) Hooks

**Installation**

``npm install better-umi-log``

**Basic Usage**
```js
const log = require("umi-log");

log.info("Test");
log.warn("Test");
log.error("Test");
log.debug("Test");
log.custom("TEST", "Test");
```

**Hooks**

As of version 3.1.0, you can now add hooks that run when the logger runs.
```js
const log = require("better-umi-log")

log.addHook("info", m => console.log(`reusing the message: ${m}`)
```

**License**

MIT

**Note**

I don't own the icon used, and this module is not affiliated with the Love Live! project.
