const baseKey = require('../base-key')

class animalKey extends baseKey {
  constructor(){
    super(/^Animal.([0-9]+)$/)
    super.sendNotification = true
    super.topic = 'redis-renewer'
  }

  getObjectKey(){
    return this.createMessage(super.getObjectKey())
  }

  createMessage(result){
    let body = JSON.stringify({animalId: result[1]})
    return { body }
  }
}

module.exports = animalKey