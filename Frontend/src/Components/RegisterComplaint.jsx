import React, { useState } from "react";
import "../Style/RegisterComplaint.css";
import axios from 'axios'
import {toast} from 'sonner'
import { useNavigate } from "react-router-dom";
import {Loader2} from 'lucide-react'
function Contact() {
  
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const [data,setData] = useState({
    name : "",
    roll : "",
    room : "",
    complaints: {
      fan: false,
      room: false,
      light: false,
      bathroom: false,
      other : false,
    },
    email : "",
    message : ""
  }) 
 
    const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      complaints: { ...data.complaints, [name]: checked }
    }); 

    };
  const handleForm = (e) => {
       const {name,value} = e.target
       setData({
            ...data,
            [name] : value
       })
  }
  console.log(data)
  const handleSubmit = async(e) =>{
     setLoading(true);
      e.preventDefault()
    try {
      const res = await axios.post('https://hostel-managent-backend.onrender.com/complaint',data)
      toast.success('Complaint Submitted successfully!');
      navigate('/')
    } catch(err) {
      toast.error('Failed to submit complaint. Please try again.'); 
      navigate('/')
    } 
    finally{
      setLoading(false);
    }
  }  
  return (  
    <>
      <form className="form" id="contact" onSubmit={handleSubmit}>
        <div action="" className="form-input">
          <h2 className="contact-text">Register You Complaints</h2>
          <div className="form-group">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" 
              name="name" 
              value={data.name} 
              onChange={handleForm}/>
            </div>
    
            <div>
              <label htmlFor="">Roll No.</label>
              <input 
              type="number" 
              name="roll" 
              value={data.roll}
              onChange={handleForm}/>
            </div>
            <div>
              <label htmlFor="">Room No.</label>
              <input 
              type="text" 
              name="room" 
              value={data.room}
              onChange={handleForm}/>
            </div>

           <div className="issue">
            <label htmlFor="">Issue:</label><br />
            <input className="checkbox" type="checkbox" name="fan"  checked={data.complaints.fan}
            onChange={handleCheckboxChange}/><label htmlFor="">Fan</label>
            <input className="checkbox" type="checkbox" name="room"  checked={data.complaints.room}
            onChange={handleCheckboxChange}/><label htmlFor="">Room</label>
            <input className="checkbox" type="checkbox" name="light"  checked={data.complaints.light}
            onChange={handleCheckboxChange}/><label htmlFor="">Light</label>
            <input className="checkbox" type="checkbox" name="bathroom"  checked={data.complaints.bathroom}
            onChange={handleCheckboxChange}/><label htmlFor="">Bathroom</label>
            <input className="checkbox" type="checkbox" name="other"  checked={data.complaints.other}
            onChange={handleCheckboxChange}/><label htmlFor="">Other</label>

           </div>
            <div>
              <label htmlFor="">Email</label>
              <input 
              type="email" 
              name="email" 
              value={data.email}
              onChange={handleForm}/>
            </div>
            
            <div>
              <label htmlFor="">Message</label>
              <input type="text" 
               name="message" 
               value={data.message}
               onChange={handleForm}/>
            </div>
          </div>
        </div>

          <div className="form-btn">
              {
                loading?<button className="btn"><Loader2 className="vishal"/>Please wait</button>: <button type="submit" className="btn">Submit</button>
              }
        </div>
      </form>

  
    </>
  );
}

export default Contact;
