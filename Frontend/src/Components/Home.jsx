import React from "react";
import "../Style/Home.css";
import vg from "../Images/2.webp";
import Services from './Services'
import img1 from '../Images/CM-G.png'
import img2 from '../Images/Chancellor.png'
import img3 from '../Images/VC2.png'
import img4 from '../Images/ShriAshishPatel.png'
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillAmazonCircle,
} from "react-icons/ai";
function Home() {
  return (
    <>
    <Services/>
      <div className="home-main" id="home">
        <div className="main">
          <h1>MMMUT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
      </div>

      <div className="home2">
        <img src={vg} alt="" className="img" />
        <div>
          <h2>What is MMMUT</h2>
          <p className="home2-text">
          Madan Mohan Malaviya University of Technology (MMMUT), located in Gorakhpur, Uttar Pradesh, is a prestigious technical university. Established in 1962 as Madan Mohan Malaviya Engineering College, it was later upgraded to a university in 2013. Named after the renowned educationist and freedom fighter Pandit Madan Mohan Malaviya, the university is known for its commitment to academic excellence and research.

          MMMUT offers undergraduate, postgraduate, and doctoral programs primarily in engineering, technology, and management. The campus spans 354 acres and is equipped with modern infrastructure, including well-maintained academic buildings, hostels, and sports facilities. The university also emphasizes holistic development with extracurricular activities, student clubs, and a strong focus on research and innovation. 



          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <h2>Who we are?</h2>
        <p>
        The website is designed to streamline the process of registering and addressing hostel complaints. Students can easily file complaints related to issues like fans, bathrooms, chai, and other hostel amenities. Once a complaint is submitted, it is directly forwarded to the hostel warden for prompt action. This system enhances communication between students and the warden, ensuring that problems are addressed more efficiently. By providing a direct channel for reporting issues, the website aims to improve the overall living experience in the hostel, making it more comfortable and responsive to students' needs.
        </p>
      </div>

      <div className="home4-main" id="brands">
        <div className="home4">
          <h1>MMMUT</h1>

          <div className="icon">
            <div className="img1">
          
            </div>

            <div className="img2">
     
            </div>

            <div className="img3">
         
            </div>

            <div className="img4">
              
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
