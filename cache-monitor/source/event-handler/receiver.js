const bluebird = require('bluebird')

const config = require('../config'),
redisClient = require('../clients/redis-client'),
rabbitMqClient = require('../clients/rabbitmq-client'),
keyBase = require('../keys-monitor/match-redis-key')

global.Promise = bluebird

const { REDIS_SERVER, REDIS_PASSWORD, REDIS_DATA_BASE } = config

const result = (message) => console.log(message)

const receiveQueue = () => rabbitMqClient.receiveQueue(result)


receiveQueue()