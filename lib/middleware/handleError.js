var log = require('_/log')

module.exports = function (er, req, res, next) {
  log.error(er)
  res.locals.error = er
  res.status(500).render('500')
}