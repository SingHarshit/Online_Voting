import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Verify.css"; // Import CSS file

const Verify = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/send-otp", { email });
      setMessage(res.data.message);
      setMessageType("success");
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP.");
      setMessageType("error");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/verify-otp", { email, otp });
      setMessage(res.data.message);
      setMessageType("success");
      setTimeout(() => navigate("/Home"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP.");
      setMessageType("error");
    }
  };

  return (
    <div className="verify-container">
      <h2>Email Verification</h2>

      {step === 1 && (
        <form onSubmit={sendOtp}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={verifyOtp}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}

      {message && <p className={`message ${messageType}`}>{message}</p>}
    </div>
  );
};

export default Verify;
