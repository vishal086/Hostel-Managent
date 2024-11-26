import React from "react";
import '../Style/NContact.css'
const contacts = [
  { role: "Hostel Warden", name: "Anupam Sahu", phone: "+1 234 567 8901" },
  { role: "Assistant Warden", name: "Amit Sharma", phone: "+1 987 654 3210" },
  { role: "Housekeeping Staff", name: "Manoj Gupta", phone: "+1 456 789 0123" },
  { role: "Maintenance In-charge", name: "Suresh Verma", phone: "+1 654 321 0987" },
  { role: "Security Staff", name: "Ravi Yadav", phone: "+1 321 654 9870" },
  { role: "Mess Manager", name: "Shivam Rajput", phone: "+1 789 012 3456" },
  { role: "Laundry Service", name: "Arjun Singh", phone: "+1 876 543 2109" },
  { role: "Electrician/Plumber", name: "Rahul Patel", phone: "+1 345 678 9012" },
  { role: "Medical Staff", name: "Ashok Pandey", phone: "+1 901 234 5678" },
];


const Services = () => {
  return (
    <div className="contacts-container">
      <h1>Hostel Employee Contacts</h1>
      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <h3>{contact.role}</h3>
            <p>
              <strong>Name:</strong> {contact.name}
            </p>
            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;