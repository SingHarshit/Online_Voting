import React from "react";
import './About.css'; 

const About = () => {
  console.log("About");
  return (
    <div className="about-page">
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">
        Welcome to <strong>Your Platform Name</strong>, where technology meets innovation to create a seamless online voting and polling experience.  
        Our mission is to provide a secure, efficient, and user-friendly platform that empowers organizations and individuals to make informed decisions.
      </p>

      <div className="about-section">
        <h3>Our Vision</h3>
        <p>
          We aim to revolutionize decision-making processes by offering a digital-first approach to voting and polling.  
          Our goal is to ensure transparency, accessibility, and trust in every vote cast on our platform.
        </p>
      </div>

      <div className="about-section">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>🔒 <strong>Security:</strong> End-to-end encryption ensures that your votes are confidential and tamper-proof.</li>
          <li>🌍 <strong>Accessibility:</strong> Participate in voting anytime, anywhere, on any device.</li>
          <li>📊 <strong>Real-Time Results:</strong> Instant access to live statistics and detailed reports.</li>
          <li>🌱 <strong>Sustainability:</strong> A paperless solution contributing to a greener future.</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Who Can Use Our Platform?</h3>
        <p>
          Our versatile platform serves a wide range of users, including:
        </p>
        <ul>
          <li>🏛️ Government agencies for local and national elections.</li>
          <li>🏢 Corporations for board decisions and employee surveys.</li>
          <li>🎓 Educational institutions for student council elections.</li>
          <li>🎭 Communities for event planning and leadership voting.</li>
          <li>📊 Researchers for public opinion polling.</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Join Us Today</h3>
        <p>
          Experience the future of online voting and polling. Let’s make every vote count and every decision smarter.  
          Together, we can create a more transparent and inclusive decision-making process.
        </p>
      </div>
    </div>
  );
};

export default About;
