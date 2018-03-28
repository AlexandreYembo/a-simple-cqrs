class baseKey{
  constructor(pattern){
    this.pattern = pattern
    this.key = null
    this.sendNotification = false
    this.topic = undefined
  }

  matchKey(key){
    this.key = key
    return this.pattern.test(key)
  }

  getObjectKey(){
    return this.pattern.exec(this.key)
  }
}

module.exports = baseKey