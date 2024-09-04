import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [helpers, setHelpers] = useState([]);
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientResponse = await fetch(`http://localhost:3001/clients/${id}`);
        const clientData = await clientResponse.json();
        setClient(clientData);
  
        const helpersResponse = await fetch("http://localhost:3001/helpers/allhelpers");
        const helpersData = await helpersResponse.json();
        setHelpers(helpersData);
  
        const newMatches = helpersData.filter(helper => helper.city === clientData.city);
        setMatches(newMatches);
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData();
  }, [id]);
  const handlematch=()=>{


    
  }

  return (
    <div className="client-details">
    <h1>Client Matches</h1>
    <div className="matches-grid">
      {matches.map((match) => (
        <div key={match.id} className="match-card">
          <h2>{match.name}</h2>
          <p>{match.city}</p>
          <p>{match.phone}</p>
          <button onClick={handlematch}>match</button>
        </div>
      ))}
    </div>
  </div>
);
};

export default ClientDetails;
