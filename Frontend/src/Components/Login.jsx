import React, { useState } from "react";
import axios from "axios";
import "../Style/Register.css"; // Importing the CSS file
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    try {
      // Make sure to set withCredentials to true for cookies
      const response = await axios.post("https://hostel-managent-backend.onrender.com/login", formData, {
        withCredentials: true,
      });
      localStorage.setItem("Messenger", JSON.stringify(response.data));
      toast.success("Logged in successfully");
      navigate('/home')
      window.location.reload()
  
    } catch (error) {
      toast.error("Something Went Wrong.");
    }
  };

  return (
    <div className="container">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
        <div className="submit-btn">
          <p>New User ? </p>
          <a href="/">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
