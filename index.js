var io = require('./io')
var csv = require('./csv')
var json = require('./json')
var scan = require('./scan')
var cli = require('./cli')

function process(inputFilePath, outputFilePath) {
  io.read(inputFilePath)
    .then(csv.deserialize)
    .then(scan) // Analyse Data Points (for now, only indiividually and without context)
    .then(json.serialize)
    .then((output) => io.write(outputFilePath, output))
}

cli(process)
