function invoke() {
  var [inputFilePath, outputFilePath] = process.argv.slice(2)

  return new Promise(
    (resolve, reject) => {
      resolve({ inputFilePath, outputFilePath })
    }
  )
}

module.exports = {
  invoke
}
