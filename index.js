var parse = require('csv-parse/lib/sync')
var fs = require('fs')
var scan = require('./scan')

function read(path) {
  return fs.readFileSync(path)
}

function write(path, report) {
  fs.writeFileSync(path, report)
}

function deserialize(file) {
  return parse(file)
}

function serialize(data) {
  return JSON.stringify(data, null, 4)
}

function process(inputFilePath, outputFilePath) {
  new Promise((resolve) => resolve(inputFilePath))
    .then(read)
    .then(deserialize)
    .then(scan)
    .then(serialize)
    .then(write.bind(null, outputFilePath))
}

process('./data/unsafe-data-1.csv', 'unsafe-data-1-reports.json')
process('./data/unsafe-data-2.csv', 'unsafe-data-2-reports.json')
