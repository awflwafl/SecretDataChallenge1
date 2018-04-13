var ipv4Scan = require('./ipv4/index.js')
var macScan = require('./mac/index.js')

module.exports = function (data) {
  return [
    ipv4Scan,
    macScan
  ].reduce((flags, scanner) => flags.concat(scanner(data)), [])
}
