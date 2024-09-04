// AddClientForm.js
import React, { useState } from 'react';


const AddClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    fetch('http://localhost:3001/clients/addclient',{method:"POST", headers: {
      'Content-Type': 'application/json',
    },body:JSON.stringify(formData)})
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    console.log(formData);
  };

  return (
    <div className="add-client-form">
      <h2>Add Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
