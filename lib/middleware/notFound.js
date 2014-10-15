var log = require('_/log')

module.exports = function (req, res, next) {
  log.notice('page not found', req.url)
  res.status(404).render('404')
}