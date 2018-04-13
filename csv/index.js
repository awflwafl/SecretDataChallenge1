var parse = require('csv-parse/lib/sync')

// Split data batch into a flat collection of data points that can be
// analysed by scanners without reliance on the original format.
//
// In other words; divide before conquering.
function partition(data) {
  var headings = data[0]
  var rows = data.slice(1)

  var cells = rows.reduce(
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

  return {
    data: cells,
    meta: {
      format: 'csv',
      itemCount: rows.length
    }
  }
}

function deserialize(csv) {
  return new Promise(
    (resolve) => resolve(partition(parse(csv)))
  )
}

module.exports = {
  deserialize
}
