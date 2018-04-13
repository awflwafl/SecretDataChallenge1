var fs = require('fs')

// The promise API is useful for chained processing. This is especially useful
// in case we want to allow file retrieval over networks in the future or change
// the internal implementation.
function read(filePath) {
  return new Promise(
    (resolve) => resolve(fs.readFileSync(filePath))
  )
}

// Altough the resolved output isn't valuable, the promise API is useful
// for chained processing.
function write(filePath, data) {
  return new Promise(
    (resolve) => resolve(fs.writeFileSync(filePath, data))
  )
}

module.exports = {
  read,
  write
}
