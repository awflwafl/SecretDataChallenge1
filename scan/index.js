var tenon = require('../tenon')

var networkScan = require('./network')
var uuidScan = require('./uuid')

module.exports = function (data) {
  return tenon.join([networkScan, uuidScan])(data)
}
