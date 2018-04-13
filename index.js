var io = require('./io')
var csv = require('./csv')
var json = require('./json')
var scan = require('./scan')
var cli = require('./cli')

// NOTE: This prototype does not include any error handling.
//       Please, follow the happy-path for utmost delight.
cli
  .invoke()
  .then(
    ({ inputFilePath, outputFilePath }) => {
      return io.read(inputFilePath)
        .then(csv.deserialize)
        .then(scan)
        .then(json.serialize)
        .then((output) => io.write(outputFilePath, output))
    })
