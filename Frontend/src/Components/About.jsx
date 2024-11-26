import React from "react";
import "../Style/About.css";
import img from "../Images/mmm6.jpg"
const About = () => {
  return (
    <div className="about-container">
      {/* Top Banner Image */}
      <div className="about-banner">
        <img
          src={img}
          alt="Hostel Banner"
        />
      </div>

      {/* Hostel Details */}
      <div className="about-details">
        <h1>About Our Hostel</h1>
        <p>
          Welcome to our hostel, a place that combines comfort, community, and
          convenience. Situated in the heart of the city, our hostel provides a
          nurturing environment for students, with modern amenities and a focus
          on holistic development.
        </p>
        <h2>Facilities</h2>
        <ul>
          <li>Spacious and well-ventilated rooms with attached bathrooms.</li>
          <li>24/7 security and surveillance for a safe stay.</li>
          <li>High-speed Wi-Fi connectivity throughout the premises.</li>
          <li>Mess with nutritious and delicious food options.</li>
          <li>Common areas for recreation and study.</li>
          <li>On-site medical support and emergency assistance.</li>
          <li>Sports facilities for physical fitness and leisure.</li>
        </ul>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a home away from home, ensuring every
          student has a supportive and engaging living experience. We believe in
          fostering a community that encourages academic growth, personal
          development, and mutual respect.
        </p>

        <h2>Contact Us</h2>
        <p>
          For any inquiries, feel free to reach out:
          <br />
          Email: hostelinfo@example.com
          <br />
          Phone: +1 234 567 8901
        </p>
      </div>
    </div>
  );
};

export default About;
