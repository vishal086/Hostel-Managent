const { Register } = require("../models/complainstModel")
const { Contact } = require("../models/ContactModel")
const {Student} = require("../models/registerStudent");
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config();
const home = async(req,res) => {
    res.send("Welcomt to React - Backend")
}
const complaint = async(req,res) => {
    const data = Register.create(req.body)
    return res.status(201).json({
        success:true,
        message : "Data send",
        data
    })
}


const contact = async(req,res) => {
    const data = Contact.create(req.body)
    return res.status(201).json({ 
        success:true,
        message : "Data send",
        data 
    })
}


const registerStudent = async (req, res) => {
  const { name, email, password, hostel, roomNumber } = req.body;

  try {
    // Check if the email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).send('Email is already registered');
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new student instance
    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      hostel,
      roomNumber
    });

    // Save the student to the database
    await newStudent.save();

    res.status(200).send('Student registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Registration failed');
  }
};



const JWT_SECRET = 'your-secret-key'; 
const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Please provide both email and password');
  }

  try {
    // Find student by email
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).send('Invalid credentials');
    }

    // Compare provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: student._id, email: student.email },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Set the token as an HTTP-only cookie
    res.cookie('authToken', token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript
      secure: false,  // Set to true in production (HTTPS required)
      maxAge: 3600000, // Cookie expiration time (1 hour)
    });

    res.status(200).send('Login successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};


module.exports = {complaint,contact,home,registerStudent,loginStudent};