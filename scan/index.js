/*
* Ideas:
*   - Twitter Handle from URL: https://www.regexplanet.com/cookbook/twitterurl/index.html
*   - "This row has enough data to locate the user"
*   - Twitter API "This Cell Mentions an Existing Twitter User" https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup
*
*   - Some UUID Formats Infer Origin Of Data
*
*   - PII: https://en.wikipedia.org/wiki/Personally_identifiable_information
*   - Digital Identity: https://en.wikipedia.org/wiki/Digital_identity
*   - Identifiers may be classified as omnidirectional and unidirectional.[10] Omnidirectional identifiers are intended to be public and easily discoverable, while unidirectional identifiers are intended to be private and used only in the context of a specific identity relationship.
*   - SSH Key
*/

const PATTERNS = {
  username:  {
    twitter: ''
  },
  email: '',
  network: {
    IPAddress: {
      IPv4: '',
      IPV6: ''
    },
    MACAddress: '',
    URL: '',
    JWTToken: ''
  },
  date: '',
  uuid: {
    v1: '',
    v2: '',
    v3: '',
    v4: ''
  },
  credentials: {
    ssh: '',
    pgp: ''
  }
}

function infer(collection) {
  return collection
}

function validate(collection) {
  return collection
}

const EXAMPLE = {
  version: '1',

};

module.exports = function scan(batch) {
  return batch
}
