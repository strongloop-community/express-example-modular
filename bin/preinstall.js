var fs = require('fs')
var npm = require('npm')
var path = require('path')

var libDir = path.resolve(__dirname,'../lib/')
var noop = function(){}

npm.load(function () {
  fs.readdirSync(libDir).forEach(function (mod) {
    npm.config.set('save', false) // https://github.com/npm/npm/issues/6391
    npm.prefix = path.join(libDir, mod)
    npm.commands.install(noop)
  })
})
