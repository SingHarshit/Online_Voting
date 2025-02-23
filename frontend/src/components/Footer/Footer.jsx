import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - About Election */}
        <div className="footer-about">
          <h3>About the Election</h3>
          <p>
            Ensuring free and fair elections is a fundamental part of democracy. Learn more about 
            election processes, regulations, and participation.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Directory</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Election Laws</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">🔵</a> {/* Replace with actual icons */}
            <a href="#" className="social-icon">📸</a>
            <a href="#" className="social-icon">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        © 2024 Election Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
