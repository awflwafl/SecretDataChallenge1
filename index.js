var parse = require('csv-parse/lib/sync')
var fs = require('fs')
var scan = require('./scan')

function read(path) {
  return new Promise(
    (resolve) => resolve(fs.readFileSync(path))
  )
}

function write(path, report) {
  fs.writeFileSync(path, report)
}

function deserialize(file) {
  // CSVtoJSON
  return parse(file)
}

function serialize(data) {
  return JSON.stringify(data, null, 4)
}

// Coupled to "csv-parse". Partitions into flat collection of datapoints
function partition(batch) {
  // Divide before conquering
  var headings = batch[0]
  var rows = batch.slice(1)

  return rows.reduce(
    function (memo, row, rowIndex) {
      return memo.concat(
        row.reduce(
          function (result, cell, columnIndex) {
            return result.concat({
              type: headings[columnIndex],
              itemType: 'cell',
              location: {
                row: rowIndex,
                column: columnIndex
              },
              data: cell,
            })
          },
          []
        )
      )
    },
    []
  )
}

function consolidate(data) {
  return data
}

function format(errors) {
  return {
    'version': 1,
    'item-count': 5, // oops! fix this
    'format': 'csv',
    'errors': errors
  }
}

// Schema adherence may be validates as part of this process
function process(inputFilePath, outputFilePath) {
  read(inputFilePath)
    .then(deserialize)
    .then(partition)
    .then(scan)         // Apply Data Point Scanners
    .then(consolidate)  // Apply Collection Scanners
    .then(format)
    .then(serialize)
    .then((output) => write(outputFilePath, output))
}

process('./data/unsafe-data-1.csv', 'unsafe-data-1-reports.json')
process('./data/unsafe-data-2.csv', 'unsafe-data-2-reports.json')
