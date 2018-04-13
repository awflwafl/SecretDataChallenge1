// A schema adherence step can be added to this module.

// We may have multiple output formats and multiple schemas
// for each of those.
function structure({ data, meta }) {
  return {
    'version': 1,
    'item-count': meta.itemCount,
    'format': meta.format,
    'errors': data
  }
}

function serialize(data) {
  return JSON.stringify(data, null, 4)
}

module.exports = {
  serialize(results) {
    return new Promise(
      (resolve) => resolve(serialize(structure(results)))
    )
  }
}
