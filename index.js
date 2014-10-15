/* main module entry point */
var cfg = require('_/config')
var log = require('_/log')
var app = require('_/app')

app.listen(cfg.port)
log.info('app listening on port', cfg.port)
