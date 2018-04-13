var uuidRegexp = require('uuid-regexp')
var uuidValidate = require('uuid-validate')

function infer(datum) {
  return uuidRegexp().test(datum.data)
}

function categorise(datum) {
  var match = uuidRegexp().exec(datum.data)[0]

  if (uuidValidate(match, 1)) return 'version 1'
  if (uuidValidate(match, 4)) return 'version 4'

  return 'an unknown version'
}

var descriptions = {
  'version 1': [
    'Uuids are universally unique identifiers which may be used directly or indirectly to identify a person, depending on what the uuids are assigned to.',
    'Version 1 concatenates the 48-bit MAC address of the "node" (that is, the computer generating the UUID), with a 60-bit timestamp, being the number of 100-nanosecond intervals since midnight 15 October 1582 Coordinated Universal Time (UTC), the date on which the Gregorian calendar was first adopted.',
    "Usage of the node's network card MAC address for the node id means that a version 1 UUID can be tracked back to the computer that created it. Documents can sometimes be traced to the computers where they were created or edited through UUIDs embedded into them by word processing software. This privacy hole was used when locating the creator of the Melissa virus."
  ].join(' '),
  'version 4': [
    'Uuids are universally unique identifiers which may be used a a proxy to identify a person, depending on what the uuids are assigned to.',
    'This type of uuid cannot be traced to their creator, but can still be used to identify the entity they represent aross all existing systems.'
  ].join(' '),
  'an unknown version': [
    'Uuids are universally unique identifiers which may be used a a proxy to identify a person, depending on what the uuids are assigned to.',
  ].join(' ')
}

function explain(datum) {
  var category = categorise(datum)

  return [
    // What is it?
    `Something in this ${datum.itemType} looks like a uuid of ${category}.`,
    // Why might it matter?
    descriptions[category],
    // How should I verify is this matters?
    `We've been able to verify that this uuid is ${category}.`,
    // Where can I learn more? Ideally _we_ would control the destination URL do remove the external dependency.
    'You can find out more about uuids addresses here: https://en.wikipedia.org/wiki/Universally_unique_identifier'
  ].join(' ')
}

function test(datum) {
  return infer(datum)
}

function flag(datum) {
  return {
    code: 'uuid-inferred',
    message: explain(datum),
    item: {
      itemType: datum.itemType,
      location: datum.location
    }
  }
}

// TODO: Promise API
module.exports = function ({ data }) {
    return data.reduce(
      (flags, datum) => test(datum) ? flags.concat(flag(datum)) : flags,
      []
    )
}
