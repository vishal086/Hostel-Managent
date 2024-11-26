const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    name : String,
    roll : String,
    room : String,
    complaints: {
    fan: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    bathroom: {
      type: Boolean,
      default: false,
    },
    room: {
      type: Boolean,
      default: false,
    },
  },
    email : String,
    message : String
})

const Register = mongoose.model('Complaints',userShema)
module.exports = {Register}