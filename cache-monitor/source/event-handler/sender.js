const bluebird = require('bluebird')

const config = require('../config'),
redisClient = require('../clients/redis-client'),
serviceBus = require('../clients/servicebus-client')
keyBase = require('../keys-monitor/match-redis-key')

global.Promise = bluebird

const {REDIS_SERVER, REDIS_PASSWORD, REDIS_DATA_BASE, AZURE_SERVICE_BUS_CONNECTION_STRING} = config

const notificationService = serviceBus(AZURE_SERVICE_BUS_CONNECTION_STRING),
  subscriber = redisClient.createClient(REDIS_SERVER, REDIS_PASSWORD)

const notificationResult = (valid, error) => valid && console.log('Send') || console.log(`error:${error}`)

const sendNotificationOnExpireKey = (redisKey) => {
  console.log('expired!')
  let baseMatchKey = keyBase.match(redisKey)
  baseMatchKey && baseMatchKey.sendNotification 
  ? notificationService.sendTopicMessage(baseMatchKey.getObjectKey(), baseMatchKey.topic, notificationResult(true))
  : notificationResult(false, `not recognized ${redisKey}`)
}

redisClient.subscribe(subscriber, `__keyevent@${REDIS_DATA_BASE}__:expired`, sendNotificationOnExpireKey)