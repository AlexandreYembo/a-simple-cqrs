# Example of A simple CQRS concept using: NodeJS, Redis, RabbitMQ, MongoDB.

## Basically this project include 2 segments: 
### 1. A WebAPI to put some information and write data on Mongo Data Base and Send a event handler to execute a specific behavior.
### 2. A Web Job that have 2 diferent behaviors. The first one just has a responsability to listener a specific key that expire on Redis. The last one has a responsability to execute a event emitter, get the object put on rabbit queue and check the information on Database (Mongo) and renew the redis cache.
