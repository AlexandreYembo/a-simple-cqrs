const azure = require('azure')
const serviceBusService = null;

const createServiceBusService = (azureConnectionString) 
  => serviceBusService = azure.createServiceBusService(azureConnectionString)

const sendMessage = (message, queue, _callback) 
  => serviceBusService.sendQueueMessage(queue, message, 
    (error) => error && _callback(false, error) || _callback(true))

const sendTopicMessage = (message, top, _callback)
  => serviceBusService.sendTopicMessage(topic, message, 
    (error) => error && _callback(false, error) || _callback(true))

module.exports = (azureConnectionString) => {
  serviceBusService = serviceBusService(azureConnectionString),
  sendMessage = sendMessage,
  sendTopicMessage =  sendTopicMessage
}