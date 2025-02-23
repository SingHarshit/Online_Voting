import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './Vote.css'
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const Vote = () => {
  const navigate = useNavigate();

  const candidates = [
    { name: "Rahul Sharma", party: "ABC Party", place: "New Delhi", age: 45, status: "Approved" },
    { name: "Priya Verma", party: "XYZ Party", place: "South Delhi", age: 38, status: "Processing" },
    { name: "Amit Singh", party: "Independent", place: "North Delhi", age: 50, status: "Rejected" },
    { name: "Neha Gupta", party: "PQR Party", place: "East Delhi", age: 42, status: "Withdrawn" },
    { name: "Ravi Kumar", party: "LMN Party", place: "West Delhi", age: 39, status: "Approved" },
    { name: "Ankit Sharma", party: "ABC Party", place: "New Delhi", age: 45, status: "Approved" },
    { name: "Priya Desai", party: "XYZ Party", place: "South Delhi", age: 38, status: "Approved" },
    { name: "Amit Singhal", party: "Independent", place: "North Delhi", age: 50, status: "Approved" },
    { name: "Neha kothak", party: "PQR Party", place: "East Delhi", age: 42, status: "Approved" },
    { name: "Lamin ", party: "LMN Party", place: "West Delhi", age: 39, status: "Approved" },
  ];

  // Filter only approved candidates
  const approvedCandidates = candidates.filter(candidate => candidate.status === "Approved");

  // Handle Vote Click
  const [voted, setVoted] = useState(null);

  const handleVote = (candidateName) => {
    if (voted === null) {
      setVoted(candidateName);
      toast.success(`🗳️ You voted for ${candidateName}`, { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <div className="voting-container">
      <ToastContainer /> {/* Toast Notification Container */}
      
      <button onClick={() => navigate("/Election")} className="back-button">⬅ Back to Election</button>
      
      <h1 className="headingv">🗳️ Vote for Your Candidate</h1>

      <div className="candidate-list">
        {approvedCandidates.length > 0 ? (
          approvedCandidates.map((candidate, index) => (
            <div key={index} className="candidate-card">
              <h2>{candidate.name}</h2>
              <p><strong>Party:</strong> {candidate.party}</p>
              <p><strong>Place:</strong> {candidate.place}</p>
              <p><strong>Age:</strong> {candidate.age}</p>
              <button 
                className="vote-button" 
                onClick={() => handleVote(candidate.name)}
                disabled={voted !== null}
              >
                {voted === candidate.name ? "Voted ✅" : "Vote Now"}
              </button>
            </div>
          ))
        ) : (
          <p>No approved candidates available for voting.</p>
        )}
      </div>
    </div>
  );
};

export default Vote;




