//const {RABBITMQ_SERVER} = require('../config')

const amqp = require('amqplib/callback_api')

// const connect = () => amqp.connect('amqp://localhost', (err, conn) => {
//   conn.createChannel((err, ch) =>{
//     let q = 'hello'
//     ch.assertQueue(q, {durable: false})

//     for(i = 0; i < 100; i++){
      
//       ch.sendToQueue(q, new Buffer(JSON.stringify({id: i, name: "teste_" + i})))
//       console.log("[x] Sent 'Hello World!'")
//     }
  
//   })

//   setTimeout(() => {
//     conn.close() 
//     process.exit(0)
//   }, 6000)
// })

const connect = () => amqp.connect('amqp://localhost', (err, conn) => {

  // Use the default 'amq.topic' exchange
  conn.queue('my-queue', function(q){   
      q.bind('#');

      q.subscribe(function (message) {                
          console.log(message);
      });
    });
});


connect()

