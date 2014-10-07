var fs = require('fs')
var npm = require('npm')
var path = require('path')

var libDir = path.resolve(__dirname,'../lib/')
var noop = function(){}

npm.load(function () {
  fs.readdirSync(libDir).forEach(function (mod) {
    npm.prefix = path.join(libDir, mod)
    npm.commands.install(noop)
  })
})