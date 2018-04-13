var { NetworkScanner } = require('./scanners/index.js')

module.exports = function scan(batch) {
  return NetworkScanner.analyse(batch)
}
