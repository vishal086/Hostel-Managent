import React, { useState, useEffect } from 'react'
import './Style/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'
import RegisterComplaint from './Components/RegisterComplaint'
import Register from './Components/Regiser'
import Login from './Components/Login'

function App() { 
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Get item from localStorage
    const storedItem = localStorage.getItem('Messenger');
    if (storedItem) {
      setItem(JSON.parse(storedItem)); // Parse the stored string to its original data type (e.g., object, array)
    }
  });

  console.log(item)
  return (
    <> 
      <BrowserRouter>
        {item && <Navbar />}
        
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={item && <Home />} />
          <Route path="/services" element={item && <Services />} />
          <Route path="/complaint" element={item && <RegisterComplaint />} />
          <Route path="/contact" element={item && <Contact />} />
        </Routes>

   
        {item && <Footer />}
      </BrowserRouter>
    </>
  )
}

export default App;
