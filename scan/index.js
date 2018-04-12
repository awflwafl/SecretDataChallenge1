function infer({ location, data }) {
  if (!(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/).test(data)) return;

  return {
    code: 'ip-address',
    message: 'Found one!',
    location
  }
}

function validate(collection) {
  return collection
}

// Generic for inividual data points
function analyse(data) {
  return new Promise((resolve) => resolve(data))
    .then(
      (data) => data.reduce(
        (errors, datum) => {
          var result = infer(datum)

          return typeof result === 'object' ? errors.concat(result) : errors
        },
        []
      )
    )
}

class NetworkScanner {
  constructor(data) {
    this.data = data
    this.result = null
  }

  run() {
    if (this.result !== null) return this.result

    this.result = [
      new IPAddressScanner(this.data),
      new 
    ]

    return this.result
  }
}

function analyze(data) {
  return new Promise((resolve) => resolve(data))
    .then(
      (data) => data.reduce(
        (errors, datum) => {
          var result = infer(datum)

          return typeof result === 'object' ? errors.concat(result) : errors
        },
        []
      )
    )

  return new Promise(
    (resolve) => resolve(data)
  )


module.exports = function scan(batch) {
  return new Promise((resolve) => resolve(batch))
    .then(analyse)
}
