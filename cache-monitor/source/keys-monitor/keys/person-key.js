const baseKey = require('../base-key')

class personKey extends baseKey {
  constructor(){
    super(/^Person.([0-9]+)$/)
    super.sendNotification = true
    super.topic = 'redis-renewer'
  }

  getObjectKey(){
    return this.createMessage(super.getObjectKey())
  }
  
  createMessage(result){
    let body = JSON.stringify({personId: result[1]})
    return { body }
  }
}

module.exports = personKey