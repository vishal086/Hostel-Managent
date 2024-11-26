import React from "react";
import '../Style/Mess.css'
const menu = {
  Monday: ["Breakfast: Poha, Tea", "Lunch: Dal, Rice, Chapati, Salad", "Dinner: Paneer, Rice, Chapati, Sweet"],
  Tuesday: ["Breakfast: Sandwich, Coffee", "Lunch: Rajma, Rice, Chapati, Curd", "Dinner: Chole, Bhature, Kheer"],
  Wednesday: ["Breakfast: Idli, Sambhar", "Lunch: Mixed Veg, Rice, Chapati, Pickle", "Dinner: Dal Makhani, Rice, Naan"],
  Thursday: ["Breakfast: Aloo Paratha, Curd", "Lunch: Pulao, Raita, Chapati", "Dinner: Manchurian, Fried Rice, Soup"],
  Friday: ["Breakfast: Upma, Tea", "Lunch: Kadhi, Rice, Chapati, Papad", "Dinner: Butter Chicken, Naan, Dessert"],
  Saturday: ["Breakfast: Bread, Jam, Butter", "Lunch: Veg Biryani, Curd", "Dinner: Veg Kofta, Rice, Chapati"],
  Sunday: ["Breakfast: Poori, Aloo Sabji", "Lunch: Sambar, Rice, Papad", "Dinner: Veg Pizza, Ice Cream"],
};

const Mess = () => {
  return (
    <div className="mess-container">
      <h1>Mess Details</h1>
      <div className="mess-info">
        <div className="section">
          <h2>Menu</h2>
          <div className="menu">
            {Object.keys(menu).map((day, index) => (
              <div key={index} className="menu-day">
                <h3>{day}</h3>
                <ul>
                  {menu[day].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <h2>Important Details</h2>
          <ul>
            <li>Mess Timings: Breakfast ( 8:00 AM - 9:30 AM)</li>
            <li>Mess Timings: Lunch (12:30 PM - 2:30 PM)</li>
            <li>Mess Timings: Dinner (8:00 PM - 9:30 PM)</li>
            <li>Contact: Mess Manager - +1 234 567 8901</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mess;
