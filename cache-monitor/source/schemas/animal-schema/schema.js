'use strict'

const mongoose = require('mongoose'),
schema = mongoose.Schema

const classSchema = new Schema({
    name: {type: String}
})

const animalSchema = new schema({
    name: {type: String, require: true, class: classSchema}
})

animalSchema.static = require('./animal-static')

module.exports = animalSchema