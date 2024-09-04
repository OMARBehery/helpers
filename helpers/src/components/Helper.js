// Client.js
import React from 'react';


const Helper = ({ name, phone, city, email }) => {
  return (
    <div className="client">
      <div className="client-info">
        <h3>{name}</h3>
        <p>Phone: {phone}</p>
        <p>City: {city}</p>
        <p>Email: {email}</p>
      </div>
      <button className="manage-btn">Manage</button>
    </div>
  );
};

export default Helper;
