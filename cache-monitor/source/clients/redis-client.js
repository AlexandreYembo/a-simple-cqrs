const redis = require('redis'),
bluebird = require('bluebird')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const createClient = (host, password) => redis.createClient()//{host, password})

const subscribe = (client, channel, callback) => {
  client.on('pmessage', (pattern, ch, expiredKey) => {
    console.log(`key ${expiredKey} has expired: ${pattern}`)
    callback(expiredKey)
  })
  console.log(`assigning ${channel} `)
  client.psubscribe(channel)
  console.log('assigned!')
}

const stopSubscribe = (client) => client.quit()

module.exports = {createClient, subscribe, stopSubscribe}