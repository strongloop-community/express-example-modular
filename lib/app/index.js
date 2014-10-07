var cfg = require('config')
var express = require('express')
var log = require('log')

var app = module.exports = express()

app.get('/', function (req, res) {
  res.send(cfg.greeting)
})

app.use(function (req, res, next) {
  throw new Error('not found: '+req.url)
})

app.use(function (er, req, res, next) {
  log.err(er)
  res.status(500).send('oh no!')
})

app.listen(3000)