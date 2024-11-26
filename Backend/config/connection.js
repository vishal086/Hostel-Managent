const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const URI = process.env.URI;



const connectDB = async() =>{
    try {
        mongoose.connect(URI) 
        console.log("DB Connected")
    } catch(err) {
        console.log("Connection Failed") 
        console.log(err)
    }
}

module.exports = {connectDB} 