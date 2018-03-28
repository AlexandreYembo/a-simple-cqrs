const baseKey = require('../base-key')

class animalKey extends baseKey {
  constructor(){
    super(/^Teste.([0-9]+)$/)
    super.sendNotification = true
    super.topic = 'redis-renewer'
  }

  getObjectKey(){
    return this.createMessage(super.getObjectKey())
  }

  createMessage(result){
    let customProperties = {cacheType: 'renew-keys'}
    let body = JSON.stringify({animalId: result[1]})

    return { body, customProperties }
  }
}

module.exports = animalKey