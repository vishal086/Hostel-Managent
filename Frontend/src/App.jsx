import React, { useState, useEffect } from "react";
import "./Style/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import RegisterComplaint from "./Components/RegisterComplaint";
import Register from "./Components/Regiser";
import Login from "./Components/Login";
import About from "./Components/About";
import AllServecies from "./Components/AllServecies";
import ContactDetails from "./Components/ContactDetails";
import Mess from "./Components/Mess";
import FeePayment from "./Components/Rooms";
import Gallery from "./Components/Gellery";
function App() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Get item from localStorage
    const storedItem = localStorage.getItem("Messenger");
    if (storedItem) {
      setItem(JSON.parse(storedItem)); // Parse the stored string to its original data type (e.g., object, array)
    }
  });

  console.log(item);
  return (
    <>
      <Router>
        {item && <Navbar />}

        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={item && <Home />} />
          <Route path="/about" element={item && <About />} />
          <Route path="/allservices" element={<AllServecies />} />
          <Route path="/allservices/contact" element={<ContactDetails />} />
          <Route path="/allservices/mess" element={<Mess />} />
          <Route path="/allservices/feepayment" element={<FeePayment />} />
          <Route path="/allservices/gallery" element={<Gallery />} />

          <Route path="/complaint" element={item && <RegisterComplaint />} />
          <Route path="/contact" element={item && <Contact />} />
        </Routes>

        {item && <Footer />}
      </Router>
    </>
  );
}

export default App;
