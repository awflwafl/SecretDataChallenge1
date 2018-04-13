var tenon = require('../tenon')

var networkScan = require('./network')
var uuidScan = require('./uuid')

module.exports = function ({ data, meta }) {
  return tenon
    .join([networkScan, uuidScan])(data)
    .then((results) => ({ data: results, meta }))
}
