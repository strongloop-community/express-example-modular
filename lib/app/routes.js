var express = require('express')
var cfg = require('_/config')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send(cfg.greeting)
})

module.exports = router