const mongoose = require('mongoose'),
schema = require('./schema')

module.exports = mongoose.model('animals', schema)