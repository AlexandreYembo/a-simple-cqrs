const { animalKey, personKey } = require('./keys')
const matches = [new animalKey(), new personKey()]

module.exports = {
  match: key => matches.filter(f => f.matchKey(key))[0]
}
