import React from "react";
import "../Style/Gallery.css";


const images = [
  "https://via.placeholder.com/300x200?text=Hostel+Room",
  "https://via.placeholder.com/300x200?text=Mess+Hall",
  "https://via.placeholder.com/300x200?text=Study+Area",
  "https://via.placeholder.com/300x200?text=Common+Room",
  "https://via.placeholder.com/300x200?text=Hostel+Entrance",
  "https://via.placeholder.com/300x200?text=Playground",
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Hostel Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Hostel View ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;