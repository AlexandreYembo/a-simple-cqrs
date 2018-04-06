const {RABBITMQ_SERVER, RABBITMQ_CHANNEL} = require('../config')

const amqp = require('amqplib/callback_api')

var objQueue = null
const sendToQueue = (obj) => { 
    objQueue = obj
    connect(createChannelToSender)
}

const receiveQueue = (_callBack) => connect((err, conn) => 
    createChannelToReceiver(err, conn, _callBack))

const connect = (channel) => amqp.connect(`amqp://${RABBITMQ_SERVER}`, channel)

const createChannelToSender = (err, conn) =>   conn.createChannel(send)

const send = (err, ch) => {
    let q = RABBITMQ_CHANNEL
    ch.assertQueue(q, {durable: false})
    ch.sendToQueue(q, new Buffer(JSON.stringify(objQueue.body)))
    console.log(`Object ${objQueue.body} sent`)
}

const createChannelToReceiver = (err, conn, _callBack) => conn.createChannel((err, ch) => 
    receive(err, ch, _callBack))

const receive = (err, ch, _callBack) => {
    let q = RABBITMQ_CHANNEL
    ch.assertQueue(q, {durable:false})
    ch.consume(q, (msg) =>{
        console.log(" [x] Received %s", msg.content.toString())
        _callBack(JSON.parse(msg.content))
    }, {noAck: true})
}

module.exports = {sendToQueue, receiveQueue}
