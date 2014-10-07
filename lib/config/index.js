var env = process.env.NODE_ENV || 'development'
var cfg = require('./env/'+env)
cfg.env = env
module.exports = cfg