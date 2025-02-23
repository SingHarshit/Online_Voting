import React from "react";
import './Contact.css'; // Optional: Add custom styles

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">
        We’re here to help! Whether you have questions about our platform, need technical assistance, 
        or want to explore how our online voting system can work for you, feel free to reach out.
      </p>

      <div className="contact-info">
        <h3>Email Us:</h3>
        <p>
          📧 <a href="mailto:support@yourplatform.com">support@yourplatform.com</a>
        </p>

        <h3>Call Us:</h3>
        <p>
          📞 <a href="tel:+11234567890">+1 (123) 456-7890</a>
        </p>

        <h3>Visit Our Website:</h3>
        <p>
          🌐 <a href="https://www.yourplatform.com" target="_blank" rel="noopener noreferrer">
            www.yourplatform.com
          </a>
        </p>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" placeholder="Enter your message" rows="5" required></textarea>

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
