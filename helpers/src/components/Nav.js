// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/helpers">Helpers</Link></li>
        <li><Link  to="/addh">Add helper</Link></li>
        <li><Link to="/addc">add client</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
