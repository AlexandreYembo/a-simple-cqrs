module.exports = {
  REDIS_SERVER: process.env.REDIS_SERVER || '',
  REDIS_PASSWORD: process.env.REDIS_PASSWORD || '',
  REDIS_DATA_BASE : process.env.REDIS_DATA_BASE || 0,
  AZURE_SERVICE_BUS_CONNECTION_STRING : process.env.AZURE_SERVICE_BUS_CONNECTION_STRING || '',
  RABBITMQ_SERVER: process.env.RABBITMQ_SERVER || 'localhost',
  RABBITMQ_CHANNEL:process.env.RABBITMQ_CHANNEL || 'cache-renew' 
}