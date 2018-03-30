const {RABBITMQ_SERVER, RABBITMQ_CHANNEL} = require('../config')

const amqp = require('amqplib/callback_api')

var objSend = null
const sendToQueue = (obj) => { 
    objSend = obj
    connect()
}

const connect = () => amqp.connect(`amqp://${RABBITMQ_SERVER}`, createChannel)

const createChannel = (err, conn) =>   conn.createChannel(send)

const send = (err, ch) => {
    let q = RABBITMQ_CHANNEL
    ch.assertQueue(q, {durable: false})
    ch.sendToQueue(q, new Buffer(JSON.stringify(objSend.body)))
    console.log(`Object ${objSend.body} sent`)
}

module.exports = {sendToQueue}
