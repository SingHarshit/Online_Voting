import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'  

const Navbar = () => {
  console.log("Navbar rendered");
  return (
    <div className="Navbar">
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Verify">Verify Email</Link>
    </div>
  );
};

export default Navbar;
