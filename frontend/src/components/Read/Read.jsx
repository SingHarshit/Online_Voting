import React from "react";
import './Read.css'; // Optional: Add custom styles

const Read = () => {
  return (
    <div className="read-more-page">
      <h1 className="read-more-heading">Learn More About Our Platform</h1>
      <p className="read-more-description">
        Our online voting and polling system is designed to revolutionize the way people participate in decision-making processes. 
        From secure elections to quick surveys, we provide a platform that is reliable, transparent, and user-friendly.
      </p>

      <div className="read-more-section">
        <h3>What Makes Us Unique?</h3>
        <ul>
          <li>🔒 <strong>Secure and Reliable:</strong> Your votes are protected with advanced encryption and fraud prevention mechanisms.</li>
          <li>🌐 <strong>Global Accessibility:</strong> Participate in voting from anywhere in the world, on any device with internet access.</li>
          <li>📊 <strong>Real-Time Insights:</strong> Monitor participation and results as they happen, with instant data analytics and reporting.</li>
          <li>🌱 <strong>Sustainable Solution:</strong> Go paperless and contribute to a greener, more eco-friendly future.</li>
        </ul>
      </div>

      <div className="read-more-section">
        <h3>How It Works</h3>
        <ol>
          <li>📋 <strong>Register:</strong> Sign up with your details to gain access to the voting platform.</li>
          <li>🗳️ <strong>Vote:</strong> Cast your vote or participate in a poll with just a few clicks.</li>
          <li>📈 <strong>Track Results:</strong> View real-time updates and final results instantly after voting ends.</li>
        </ol>
      </div>

      <div className="read-more-section">
        <h3>Applications of Our Platform</h3>
        <p>
          Our platform can be used for a wide variety of purposes, including:
        </p>
        <ul>
          <li>🏛️ Government elections at local, regional, and national levels.</li>
          <li>🏢 Corporate decision-making and employee feedback surveys.</li>
          <li>🎓 Student elections in schools and universities.</li>
          <li>🎭 Community-based decision-making and event planning.</li>
          <li>📊 Market research and public opinion polling.</li>
        </ul>
      </div>

      <div className="read-more-section">
        <h3>Why It Matters</h3>
        <p>
          Voting is at the heart of democracy and decision-making. Our system ensures that everyone has a voice and that their opinions are counted accurately and fairly. 
          By embracing digital innovation, we aim to make the voting process more inclusive, efficient, and impactful.
        </p>
      </div>

      <div className="read-more-section">
        <h3>Join the Revolution</h3>
        <p>
          Be part of the future of voting. Explore our platform, register to vote, and help shape the decisions that matter most. 
          Together, we can create a more transparent, accessible, and empowered voting experience.
        </p>
      </div>
    </div>
  );
};

export default Read;
