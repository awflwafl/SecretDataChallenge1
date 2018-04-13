// A schema adherence step can be added to this module.

// We may have multiple output formats and multiple schemas
// for each of those.
function structure(data) {
  return {
    'version': 1,
    'item-count': 5,
    'format': 'csv',
    'errors': data
  }
}

function serialize(data) {
  return JSON.stringify(data, null, 4)
}

module.exports = {
  serialize(data) {
    return new Promise(
      (resolve) => resolve(serialize(structure(data)))
    )
  }
}
