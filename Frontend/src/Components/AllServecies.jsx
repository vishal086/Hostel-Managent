import React from "react";
import { Link } from "react-router-dom";
import "../Style/AllServices.css";
import Services from './Services'
function AllServecies() {
  return (
    <>
      <h1>Services</h1>
      <Services/>

      <div className="services-link">
        <div className="card">
          <h3>Contact Details</h3>
          <p>
            The Contact Details section provides key information for contacting
            the warden, secretary, laundry services, mess supervisor, and
            maintenance team, ensuring quick access to assistance for any
            hostel-related needs.
          </p>
          <Link to={"contact"}>Contacts</Link>
        </div>

        <div className="card">
          <h3>Mess Details</h3>
          <p>
            The Mess section provides details about meal timings, ensuring
            residents can plan their day around breakfast, lunch, evening
            snacks, and dinner schedules. It also includes information to
            address concerns related to food quality.
          </p>
          <Link to={"mess"}>Mess</Link>
        </div>

        <div className="card">
          <h3>Room Details</h3>
          <p>
            The Rooms section provides information about the total number of
            rooms in the hostel and their allocation status. It helps residents
            and management stay updated on room availability, occupancy, and
            related details for better organization.
          </p>
          <Link to={"feepayment"}>Rooms</Link>
        </div>

        <div className="card">
          <h3>Gallery</h3>
          <p>
            The Gallery section showcases a collection of photos capturing
            various aspects of hostel life, including events, facilities, and
            everyday moments. It offers a visual glimpse into the hostel
            environment, highlighting its vibrant and welcoming atmosphere.
          </p>
          <Link to={"gallery"}>Gallery</Link>
        </div>
      </div>
    </>
  );
}

export default AllServecies;
