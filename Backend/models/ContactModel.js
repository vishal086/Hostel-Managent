const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    name : String,
    email : String,
    message : String
})

const Contact = mongoose.model('Contact',userShema)
module.exports = {Contact}