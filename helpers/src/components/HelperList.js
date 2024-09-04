// ClientList.js
import React from 'react';
import Helper from './Helper';
import { useState, useEffect } from 'react';

const HelperList = () => {






  const [Helpers,setHelpers]=useState([])


  useEffect(()=>{
  
  
  fetch('http://localhost:3001/helpers/allhelpers')
  .then(res=>res.json())
  .then(data=>setHelpers(data))
  .catch(err=>console.log(err))
  
  
  
  
  
  
  
  },[])
  











  return (
    <div className="client-list">
      <h2>Helper List</h2>
      {Helpers.length === 0 ? (
        <p>No Helpers found.</p>
      ) : (
        <ul>
          {Helpers.map((helper, index) => (
            <li key={index}>
              <Helper
                name={helper.name}
                phone={helper.phone}
                city={helper.city}
                email={helper.email}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HelperList;
