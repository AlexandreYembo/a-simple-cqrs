const { animalKey } = require('./keys')
const matches = [new animalKey()]

module.exports = {
  match: key => matches.filter(f => f.matchKey(key))[0]
}
