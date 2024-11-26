const mongoose = require('mongoose');

// Define the schema for student registration
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  hostel: {
    type: String,
    required: true,
    trim: true
  },
  roomNumber: {
    type: String,
    required: true,
    trim: true
  },
  // Optionally, you can add a registration date
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = {Student};
