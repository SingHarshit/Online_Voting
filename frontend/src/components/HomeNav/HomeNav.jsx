import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomeNav.css"; // External CSS file

const HomeNav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.clear();
      localStorage.removeItem("token");
      navigate("/Login");
    } catch (error) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="navbar">
      {/* Left Menu Button */}
      <div className="menu">
        <button className="menu-btn">☰ Menu</button>
      </div>

      {/* Right-Side Items */}
      <div className="nav-items">
        <span className="toll-free">Toll-Free: 95</span>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default HomeNav;
