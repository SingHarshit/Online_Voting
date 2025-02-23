import React from "react";
import './Candidates.css';
import { useNavigate } from "react-router-dom";
import HomeNav from "../../HomeNav/HomeNav";

const Candidates = () => {
  const navigate = useNavigate();

  const candidates = [
    { name: "Rahul Sharma", party: "ABC Party", status: "approved" },
    { name: "Priya Verma", party: "XYZ Party", status: "processing" },
    { name: "Amit Singh", party: "Independent", status: "rejected" },
    { name: "Neha Gupta", party: "PQR Party", status: "withdrawn" },
    { name: "Ravi Kumar", party: "LMN Party", status: "Received" },
    { name: "Priya Verma", party: "XYZ Party", status: "Processing" },
    { name: "Amit Singh", party: "Independent", status: "Rejected" },
    { name: "Neha Gupta", party: "PQR Party", status: "Withdrawn" },
    { name: "Ravi Kumar", party: "LMN Party", status: "Received" },
  ];

  return (
    <div className="affidavit-container">
      <HomeNav/>

      <div className="headingc">Candidate Affidavit Management</div>
      
      <div className="status-boxes">
        <div className="status-box received">Received</div>
        <div className="status-box approved">Approved</div>
        <div className="status-box rejected">Rejected</div>
        <div className="status-box withdrawn">Withdrawn</div>
        <div className="status-box processing">Processing</div>
      </div>

      <h2 className="sub-heading">List of Candidates</h2>
      
      <table className="candidate-table">
        <thead>
          <tr>
            <th>Name of Candidate</th>
            <th>Party Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index} className={candidate.status.toLowerCase()}>
              <td>{candidate.name}</td>
              <td>{candidate.party}</td>
              <td>{candidate.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;
