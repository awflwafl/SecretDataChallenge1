var networkScan = require('./network/index.js')
var uuidScan = require('./uuid/index.js')

// Join sub-scanners to create a composite.
function join(scanners) {
  return (data) => scanners.reduce((flags, scan) => flags.concat(scan(data)), [])
}

// TODO: Promise API
module.exports = function (data) {
  return join([networkScan, uuidScan])(data)
}
