import React from "react";
import './Election.css'
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import HomeNav from "../HomeNav/HomeNav";

const Election = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HomeNav/>
      <div className="header">
        General Election to Legislative Assembly of NCT of Delhi
      </div>

      <div className="election-body">
        <div className="electmain" style={{ background: "linear-gradient(135deg,rgb(169, 230, 120),rgb(221, 196, 115))"}}>
          <h1>Press Note:</h1>
          <p>Schedule for General Election to Legislative Assembly of NCT of Delhi, 2025</p>
        </div>
        <div className="electmain" style={{ background: "linear-gradient(135deg,rgb(106, 165, 206),rgb(182, 187, 209))"}}>
          <img src="group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
          <h1>List of Observer</h1>
        </div>
        <div className="electmain" onClick={()=>navigate('/Election/Vote')} style={{ cursor: "pointer", background: "linear-gradient(135deg,rgb(224, 210, 84),rgb(233, 128, 57))" , padding: "10px", borderRadius: "5px" }}>
          <img src="platform.png" alt="" />
          <h1>Vote</h1>
        </div>
        {/* Navigate to /Election/candidates when clicked */}
        <div className="electmain" onClick={() => navigate("/Election/Candidates")} style={{ cursor: "pointer", background: "linear-gradient(135deg,rgb(223, 99, 146),rgb(96, 225, 141))" , padding: "10px", borderRadius: "5px" }}>
          <img src="menu_book_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
          <h1>Candidates Affidavits</h1>
        </div>
      </div>

      <div className="dates">
        <h1 className="datehead">Important Dates : Phase 1 (All 70 ACs)</h1>
        <h2 className="datemain">Date of Issue of Gazette Notification : 10-01-2025</h2>
        <h2 className="datemain">Last Date of Nominations : 17-01-2025</h2>
        <h2 className="datemain">Date for Scrutiny of Nominations : 18-01-2025</h2>
        <h2 className="datemain">Last Date for Withdrawal of candidatures : 20-01-2025</h2>
        <h2 className="datemain">Date of Poll : 05-02-2025</h2>
        <h2 className="datemain">Date of Counting : 08-02-2025</h2>
        <h2 className="datemain">Date before which election shall be completed :10-02-2025</h2>
      </div>
    </div>
  );
};

export default Election;
