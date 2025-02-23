import React, { useState } from "react";
import axios from "axios";
import './Registration.css'; // Optional for styling
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    aadhaar: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const aadhaarRegex = /^\d{12}$/;

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.mobile || !mobileRegex.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.aadhaar || !aadhaarRegex.test(formData.aadhaar))
      newErrors.aadhaar = "Enter a valid 12-digit Aadhaar number.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // Reset server error before submitting
  
    if (validateForm()) {
      try {
        const response = await axios.post("https://college-system-eq4r.onrender.com/register", formData);
        setSuccessMessage(response.data.message || "Registration successful!");
        
        setTimeout(() => {
          navigate('/Home'); // Redirect after success
        }, 2000);
  
        setFormData({
          name: "",
          email: "",
          mobile: "",
          aadhaar: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        setServerError(error.response?.data?.message || "Registration failed. Try again.");
      }
    } else {
      setSuccessMessage("");
    }
  };
  

  return (
    <div className="registration-page">
      <img src="image copy.png" alt="" />
      <h1 className="registration-heading">Register</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {serverError && <p className="error-message">{serverError}</p>}
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="aadhaar">Aadhaar Card Number</label>
          <input
            type="text"
            id="aadhaar"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
            placeholder="Enter your Aadhaar number"
          />
          {errors.aadhaar && <p className="error">{errors.aadhaar}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Verify Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
