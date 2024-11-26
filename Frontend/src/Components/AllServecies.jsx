import React from "react";
import { Link } from "react-router-dom";
import "../Style/AllServices.css";
function AllServecies() {
  return (
    <>
      <div className="services-link">
        <Link to={"contact"}>Contacts</Link>
        <Link to={"mess"}>Mess</Link>
        <Link to={"feepayment"}>Fee Payment</Link>
        <Link to={"gallery"}>Gallery</Link>
      </div>
    </>
  );
}

export default AllServecies;
