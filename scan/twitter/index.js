function infer(datum) {
  return datum.data === '@awflwafl'
}

// Simulate remote API access over a network
function validate(datum) {
  return new Promise(
    (resolve) => {
      console.log('Simulating Twitter Username validation API call...');
      setTimeout(
        () => resolve(true),
        3000
      )
    }
  )
}

function test(datum) {
  return infer(datum) && validate(datum)
}

function explain(datum) {
  return [
    `Something in this ${datum.itemType} looks like a Twitter username.`,

  ].join(' ')
}

function flag(datum) {
  return {
    code: 'twitter-username-inferred',
    message: explain(datum),
    item: {
      itemType: datum.itemType,
      location: datum.location
    }
  }
}

module.exports = function (data) {
  return new Promise(
    (resolve) => {
      resolve(
        Promise.all(
          data.map(
            (datum) => new Promise((resolve) => resolve(test(datum)))
          )
        ).then(
          (results) => results.reduce(
            (flags, validated, index) => validated ? flags.concat(flag(data[index])) : flags,
            []
          )
        )
      )
    }
  )
}
