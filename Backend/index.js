const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectDB } = require('./config/connection')
const { router } = require('./routes') 
const app = express() 
  
app.use(express.json()) 
const corsOptions = {
    origin: 'http://localhost:5173',  // The frontend URL
    methods: 'GET,POST,PUT,DELETE',  // Allowed methods
    allowedHeaders: 'Content-Type,Authorization',  // Allowed headers
    credentials: true,  // Allow cookies to be sent with requests
  };
  
  // Middleware
app.use(cors(corsOptions));  // Use CORS middleware with options
app.use(bodyParser.json())
app.use(router)

app.listen(8000,()=>{
    console.log("Server is Running")
    connectDB();
}) 