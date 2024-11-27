import React, { useState } from "react";
import axios from "axios";
import "../Style/Register.css"; // Importing the CSS file
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  // Use single useState hook to manage form data
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    hostel: "",
    roomNumber: "",
  });

  const [error, setError] = useState("");

  // Handle input changes for each form field
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, hostel, roomNumber } = formData;

    if (!name || !email || !password || !hostel || !roomNumber) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000", formData);
      toast.success("User Register Successfully");
      localStorage.setItem("Messenger", JSON.stringify(response.data));
      navigate('/home')
    } catch (error) {
      toast.error("Something Went wrong");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleForm}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleForm}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleForm}
        />
        <input
          type="text"
          name="hostel"
          placeholder="Hostel Name"
          value={formData.hostel}
          onChange={handleForm}
        />
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleForm}
        />
        <button type="submit">Register</button>
        <div className="submit-btn">
          <p>Already Register ? </p>
          <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
