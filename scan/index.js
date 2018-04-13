var tenon = require('../tenon')

var networkScan = require('./network')
var uuidScan = require('./uuid')
var twitterScan = require('./twitter')

module.exports = function ({ data, meta }) {
  return tenon
    .join([networkScan, uuidScan, twitterScan])(data)
    .then((results) => ({ data: results, meta }))
}
