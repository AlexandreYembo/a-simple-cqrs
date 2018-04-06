const baseKey = require('../base-key'),
  animalSchema = require('../../schemas/animal-schema')

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
    let body = {animalId: result[1]}
    return { body }
  }

  updateObjectRedis(obj){
    listAllAnimal(obj)
  }

  listAllAnimal(obj){
    animalSchema.getAll()
      .then(listAnimals => updateCache(obj, listAnimals))
  }

  updateCache(obj, listAnimals){
    // TO DO implement update object
  }

}

module.exports = animalKey