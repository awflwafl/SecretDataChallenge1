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
*
*   - Output
*   - Settings
*   - 1+ processors
*   - Consider additional PII
*
*   - Tagging
*   - Accumulation
*   - Dynamic messages
*/

var PATTERNS = {
  username:  {
    twitter: '' /* demonstrate network calls API */
  },
  email: '',
  network: { /* demonstrate cumulation of data */
    IPAddress: {
      IPv4: '',
      IPV6: ''
    },
    MACAddress: '',
    URL: '',
    JWTToken: ''
  },
  date: '',
  uuid: { /* demonstrate indirect knowledge transfer */
    v1: '',
    v2: '',
    v3: '',
    v4: ''
  }
}

var EXAMPLE = {
  'version': 1,
  'item-count': 5,
  'format': 'csv',
  'errors': [
    {
      'code': 'email-address',
      'message:': 'Row 1 looks like it has an email address in column 3. Email are considered ... revealing it may have the consequence of ... Verify safety by ...',
      'item': {
        'itemType': 'cell',
        'location': {
          'row': 1,
          'column': 3
        }
      }
    }
  ]
};

var scanners = [
  twitter,
  email,
  network,
  socialMedia,
  uuid
]

