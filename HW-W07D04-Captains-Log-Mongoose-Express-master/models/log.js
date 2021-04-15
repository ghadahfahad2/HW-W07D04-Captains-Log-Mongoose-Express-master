// Requiring mongoose again to create our Schema/Model
const mongoose = require('mongoose')
console.log('This is working')

// Our Schema creation
const LogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  entry: {
    type: String,
  },
  shipIsBroken: {
    type: Boolean,
    default: true,
  },
})

// We use the Schema to create a Model for mongoDB
const Log = mongoose.model('Log', LogSchema)
console.log(Log)

module.exports = Log