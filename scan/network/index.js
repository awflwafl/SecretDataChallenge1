var ipv4Scan = require('./ipv4/index.js')
var macScan = require('./mac/index.js')

// Join sub-scanners to create a composite.
function join(scanners) {
  return function (data) {
    // Promise completion of all sub-scanners then join their results
    return Promise.all(
      scanners.map(
        (scan) => new Promise(
          (resolve) => resolve(scan(data))
        )
      )
    )
    .then(
      (results) => results.reduce(
        (memo, flags) => memo.concat(flags)
      )
    )
  }
}

module.exports = function (data) {
  return join([ipv4Scan, macScan])(data)
}
