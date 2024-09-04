// ClientList.js
import React, { useEffect, useState } from 'react';
import Client from './Client';


const ClientList = () => {

const [clients,setClients]=useState([])


useEffect(()=>{


fetch('http://localhost:3001/clients/allclients')
.then(res=>res.json())
.then(data=>setClients(data))
.catch(err=>console.log(err))







},[])



  return (
    <div className="client-list">
      <h2>Client List</h2>
      {clients.length === 0 ? (
        <p>No clients found.</p>
      ) : (
        <ul>
          {clients.map((client, index) => (
            <li key={index}>
              <Client
                name={client.name}
                phone={client.phone}
                city={client.city}
                email={client.email}
                id={client._id}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientList;
