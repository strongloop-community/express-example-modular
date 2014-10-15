var test = require('tape')
var fs = require('fs')
var resolve = require('path').resolve

test('valid configs', function (t) {
  t.doesNotThrow(function () {
    var cfgs = fs.readdirSync(resolve(__dirname,'../env'))
    cfgs.forEach(function (env) {
      require('../env/'+env)
    })
  }, 'configs valid json')
  t.end()
})
