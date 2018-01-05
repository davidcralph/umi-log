<h1 align="center">
<img src="https://78.media.tumblr.com/411b7df1ecbbd44c7db811c2d7776e8c/tumblr_olim3aaQ2S1ubcx5fo1_250.png" alt="Umi-Log">
</h1>

# Umi-Log

Lightweight, easy-to-use and customizable console logger. Inspired by https://github.com/ohlookitsAugust/sj.reggol!

**Features**

* Timestamp

* Lightweight

* Customizable

**Installation**

``git clone https://github.com/ohlookitsderpy/umi-log.git``

**Usage**
```js
const log = require("./log.js")

log.notify("This is a test")
log.warn("This is a test")
log.error("This is a test")
log.debug("This is a test")
log.custom("Test", "This is a test")
```
(This file is the same as ``test.js``)

**Contributing**

If you wish to contribute, please pull request this repo! I may not accept requests which add more dependencies, as I tried to make this as lightweight as possible.

**License**

MIT
