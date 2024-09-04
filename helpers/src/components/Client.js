// Client.js
import React from 'react';
import { Link } from 'react-router-dom';

const Client = ({ name, phone, city, email,id }) => {
  return (
    <div className="client">
      <div className="client-info">
        <h3>{name}</h3>
        <p>Phone: {phone}</p>
        <p>City: {city}</p>
        <p>Email: {email}</p>
      </div>
    <Link to={`/${id}`}>  <button className="manage-btn" >Manage</button></Link>
    </div>
  );
};

export default Client;
