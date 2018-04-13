var tenon = require('../../tenon')

var ipv4Scan = require('./ipv4/index.js')
var macScan = require('./mac/index.js')

module.exports = function (data) {
  return tenon.join([ipv4Scan, macScan])(data)
}
