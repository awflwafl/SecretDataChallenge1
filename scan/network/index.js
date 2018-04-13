var ipv4Scan = require('./ipv4/index.js')
var macScan = require('./mac/index.js')

// Join sub-scanners to create a composite.
function join(scanners) {
  return (data) => scanners.reduce((flags, scan) => flags.concat(scan(data)), [])
}

// TODO: Promise API
module.exports = function (data) {
  return join([ipv4Scan, macScan])(data)
}
