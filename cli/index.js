module.exports = function (processor) {
  var [inputFilePath, outputFilePath] = process.argv.slice(2)

  if (inputFilePath === undefined || outputFilePath === undefined) {
    console.error('Please provide an input file and an outout file.')

    return
  }

  console.log('Scanning:', inputFilePath);
  processor(inputFilePath, outputFilePath)
  console.log('Report saved in:', outputFilePath);
}
