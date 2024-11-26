import React from "react";
import "../Style/Rooms.css";

const RoomDetails = () => {

    // dummy date to be replaced with api call 
  const rooms = [
    { type: "Single Seater", total: 20, available: 5, occupied: 15 },
    { type: "Double Seater", total: 15, available: 3, occupied: 12 },
    { type: "Triple Seater", total: 10, available: 2, occupied: 8 },
  ];


  return (
    <div className="room-details">
      <h1>Hostel Room Details</h1>
      <div className="room-list">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <h2>{room.type} Rooms</h2>
            <p>Total Rooms: {room.total}</p>
            <p>Available: {room.available}</p>
            <p>Occupied: {room.occupied}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDetails;