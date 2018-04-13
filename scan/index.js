var networkScan = require('./network/index.js')
var uuidScan = require('./uuid/index.js')

module.exports = function (data) {
  return [
    networkScan,
    uuidScan
  ].reduce((flags, scanner) => flags.concat(scanner(data)), [])
}
