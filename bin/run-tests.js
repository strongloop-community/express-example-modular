var fs = require('fs')
var join = require('path').join
var spawn = require('child_process').spawn
var lib = join(__dirname,'/lib')
var tap = join(__dirname,'/tap')

var debug = process.argv[2] === 'debug'

try { fs.mkdirSync(tap) }
catch (e) { console.error('tap output dir already exists') }

// gather testable modules
var mods = fs.readdirSync(lib).filter(function (file) {
  try {
    var pjson = require(join(lib,file,'package.json'))
    return pjson.scripts && pjson.scripts.test
  }
  catch (e) { return false }
}).reverse()

mods.forEach(function (mod, i) {
  if (mod === 'webapp') return
  setTimeout(function () {
    fs.open(join(tap, mod+'.tap'), 'w', function (er, out) {
      if (debug) out = 2
      var cp = spawn('npm', ['test'], { cwd: join(lib, mod), stdio: [ null, out, 2 ] })

      console.time(mod)
      cp.on('exit', function () { console.timeEnd(mod) })
    })
  }, 1000*i)
})

setTimeout(process.exit, 1000*60*3).unref()