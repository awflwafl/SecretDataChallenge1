function infer(datum) {
  return (/[a-fA-F0-9:|\s-]{17}|[a-fA-F0-9]{12}/i).test(datum.data)
}

function test(datum) {
  return infer(datum)
}

function explain(datum) {
  return [
    // What is it?
    `Something in this ${datum.itemType} looks like a MAC address.`,
    // Why might it matter?
    'A MAC address is assigned to devices during manufacturing. A person can be identified by proxy of identifying their device.',
    'According to Edward Snowden, the US National Security Agency has a system that tracks the movements of everyone in a city by monitoring the MAC addresses of their electronic devices.',
    // How should I verify is this matters?
    `While we inferred the presence of a MAC address in this ${datum.itemType}, a mismatch is still possible. Read more about MAC addresses to find out how to identify them.`,
    // Where can I learn more? Ideally _we_ would control the destination URL do remove the external dependency.
    'You can find out more about MAC addresses here: https://en.wikipedia.org/wiki/MAC_address'
  ].join(' ')
}

function flag(datum) {
  return {
    code: 'mac-address-inferred',
    message: explain(datum),
    content: datum.data,
    item: {
      itemType: datum.itemType,
      location: datum.location
    }
  }
}

module.exports = function (data) {
  return data.reduce(
    (flags, datum) => test(datum) ? flags.concat(flag(datum)) : flags,
    []
  )
}
