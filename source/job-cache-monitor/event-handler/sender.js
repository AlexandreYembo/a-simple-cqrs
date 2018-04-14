const bluebird = require('bluebird')

const config = require('../config'),
redisClient = require('../clients/redis-client'),
rabbitMqClient = require('../clients/rabbitmq-client'),
keyBase = require('../keys-monitor/match-redis-key')

global.Promise = bluebird

const {REDIS_SERVER, REDIS_PASSWORD, REDIS_DATA_BASE} = config

const notificationResult = (valid, error) => valid && console.log('Send') || console.log(`error:${error}`)

const sendNotificationOnExpireKey = (redisKey) => {
  console.log('expired!')
  let baseMatchKey = keyBase.match(redisKey)
  baseMatchKey && baseMatchKey.sendNotification
     ? rabbitMqClient.sendToQueue(baseMatchKey.getObjectKey())
     : notificationResult(false, `not recognized ${redisKey}`)
}

redisClient.subscribe(redisClient.createClient(REDIS_SERVER, REDIS_PASSWORD), `__keyevent@${REDIS_DATA_BASE}__:expired`, sendNotificationOnExpireKey)