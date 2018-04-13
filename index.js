var io = require('./io')
var csv = require('./csv')
var json = require('./json')
var scan = require('./scan')

function process(inputFilePath, outputFilePath) {
  io.read(inputFilePath)
    .then(csv.deserialize)
    .then(scan) // Analyse Data Points (for now, only indiividually and without context)
    .then(json.serialize)
    .then((output) => io.write(outputFilePath, output))
}

process('./data/unsafe-data-1.csv', 'unsafe-data-1-reports.json')
process('./data/unsafe-data-2.csv', 'unsafe-data-2-reports.json')
