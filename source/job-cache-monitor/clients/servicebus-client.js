//If you want to use Azure Service Bus, you can use the code bellow.
// Use "azure": "^2.2.1-preview", in package.json to set reference of library

// const azure = require('azure')
// let serviceBusService = null;

//  const createServiceBusService = (azureConnectionString) => 
//    serviceBusService = azure.createServiceBusService(azureConnectionString)
 

// const sendMessage = (message, queue, _callback) => 
//   serviceBusService.sendQueueMessage(queue, message, 
//     (error) => error && _callback(false, error) || _callback(true))

// const sendTopicMessage = (message, top, _callback) => 
//   serviceBusService.sendTopicMessage(topic, message, 
//     (error) => error && _callback(false, error) || _callback(true))

// module.exports = (azureConnectionString) => {return {createServiceBusService, sendMessage, sendTopicMessage}}