var cfg = require('_/config')
var log = module.exports = require('graygelf')(cfg.graylog.host)
log.on('error', console.error)

if (cfg.graylog.stdout) {
  log.on('message', function (gelf) {
    console.log(gelf.short_message)
    if (gelf.full_message) console.log(gelf.full_message)
  })
}