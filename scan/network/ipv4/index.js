function infer(datum) {
  return (/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/).test(datum.data)
}

function validate(datum) {
  return (/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
    .exec(datum.data)
    [0]
    .split('.')
    .map(Number)
    .every((fragment) => (fragment >= 0 && fragment <= 255))
}

function explain(datum) {
  return [
    // What is it?
    `Something in this ${datum.itemType} looks like an IPv4 address.`,
    // Why might it matter?
    'An IPv4 address is assigned to devices connected to computer networks and can be used to identify a person through the proxy of identifying their device.',
    // How should I verify is this matters?
    'IPv4 addresses may not be used to identify a person if they are assigned to do devices dynamically without and no timestamp is know.',
    'An IPv4 may also represent a public website.',
    'Is the time of use known?',
    'What happens when you type this IPv4 address into your browser?',
    // Where can I learn more? Ideally _we_ would control the destination URL do remove the external dependency.
    'You can find out more about IPv4 addresses here: https://en.wikipedia.org/wiki/IPv4'
  ].join(' ')
}

function test(datum) {
  return infer(datum) && validate(datum)
}

function flag(datum) {
  return {
    code: 'ipv4-address-inferred',
    message: explain(datum),
    item: {
      itemType: datum.itemType,
      location: datum.location
    }
  }
}

module.exports = function ({ data }) {
  return new Promise(
    (resolve) => resolve(
      data.reduce(
        (flags, datum) => test(datum) ? flags.concat(flag(datum)) : flags,
        []
      )
    )
  )
}
