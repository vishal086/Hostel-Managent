import React from 'react'
import {HashLink} from 'react-router-hash-link'
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
function Navbar() {
   
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the localStorage
    localStorage.clear();
    
    // Navigate to the home page
    navigate('/');
    
    // Reload the page
    window.location.reload();
  };
  return (
    <>
      <nav id="nav">
        <h1 className='Logo'>MMMUT Subhash - Hostel</h1>
        <main className='nav-main'>
            <HashLink className='link' to={"/home"}>Home</HashLink>
            <HashLink className='link' to={"/home"}>About</HashLink>
            <HashLink className='link' to={"/complaint"}>Complaint</HashLink>
            <HashLink className='link' to={"/services"}>Services</HashLink>
            <HashLink className='link' to={"/contact"}>Contact Us</HashLink>
            <FiLogOut style={{
              color : 'black',
              fontSize : '2rem',
              position : 'relative',
              top : '7px',
              right : '10px',
              paddingLeft : '1rem',
              cursor : 'pointer',
            }} onClick={handleLogout}/>
        </main>
      </nav>
    </>
  )
}

export default Navbar
