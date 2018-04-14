class baseKey{
  constructor(pattern){
    this.pattern = pattern
    this.key = null
    this.sendNotification = false
    this.topic = undefined
    this.redisObj = null
  }

  matchKey(key){
    this.key = key
    return this.pattern.test(key)
  }

  getObjectKey(){
    return this.pattern.exec(this.key)
  }

  updateObjectRedis(obj){
    this.redisObj = obj
  }
}

module.exports = baseKey