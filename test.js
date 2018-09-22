const log = require("./log.js");

log.addHook("info", m => console.log(m));

log.info("Test");
log.warn("Test");
log.error("Test");
log.debug("Test");
log.custom("TEST", "Test");
