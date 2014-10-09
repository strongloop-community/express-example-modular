var express = require('express')
var log = require('_/log')

var app = express()

app.use(require('./routes.js'))

app.use(function (er, req, res, next) {
  log.err(er)
  res.status(500).send('oh no!')
})

app.listen(3000)

module.exports = app