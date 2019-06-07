# DEPRECATED
Use something better, like https://github.com/PassTheWessel/Pikmin or https://github.com/eartharoid/leeksLazyLogger

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

``npm install umi-log``

**Basic Usage**
```js
const log = require("umi-log");

log.info("Test");
log.warn("Test");
log.error("Test");
log.debug("Test");
log.custom("TEST", "Test");
```

**Hooks Usage**

As of version 4.0, you can now add hooks that run when the logger runs.
```js
const log = require("umi-log");

log.addHook("info", m => console.log(`reusing the message: ${m}`)
```

**License**

MIT

**Credits**

Yamboy1 - Hooks system

**Note**

I don't own the icon used, and this module is not affiliated with the Love Live! project.
