import React, { useState } from "react";
import HomeNav from "../HomeNav/HomeNav";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  console.log("Home component rendered");
  const navigate = useNavigate();
  
  const handleRedirect =() => {
    navigate("/Election");
  }

  const [election, setElection] = useState(true);
  const [results, setResults] = useState(false);
  const [conduct, setConductor] = useState(false);
  const [refDocs, setRefDocs] = useState(false);

  const handleOptionClick = (option) => {
    setElection(option === "election");
    setResults(option === "results");
    setConductor(option === "conduct");
    setRefDocs(option === "refDocs");
  };

  return (
    <div>
      <HomeNav />
      <div className="picture">
        <img src="image copy 2.png" alt="" />
        <img src="image copy 3.png" alt="" />
        <img src="image copy 4.png" alt="" />
      </div>
      <div className="heading">
        <h4 className="head1">Home/Elections</h4>
        <h2 className="head2">Election Management</h2>
        <p className="headpara">
          India is a constitutional democracy with a parliamentary system of
          government, and at the heart of the system is a commitment to hold
          regular, free and fair elections.
        </p>
        <div className="options">
          <div
            className={`options-head ${election ? "active" : ""}`}
            onClick={() => handleOptionClick("election")}
          >
            Elections
          </div>
          <div
            className={`options-head ${results ? "active" : ""}`}
            onClick={() => handleOptionClick("results")}
          >
            Result
          </div>
          <div
            className={`options-head ${conduct ? "active" : ""}`}
            onClick={() => handleOptionClick("conduct")}
          >
            Conduct of Elections
          </div>
          <div
            className={`options-head ${refDocs ? "active" : ""}`}
            onClick={() => handleOptionClick("refDocs")}
          >
            Reference Documents
          </div>
        </div>
      </div>
        {/* Conditionally render content based on the selected option */}
        {election && (
          <div className="currentElection">
        <div className="currElec">
      <h1 className="currhead">Current Elections</h1>
      <div className="currRow">
        <div className="currmain" onClick={handleRedirect}>
          <img src="group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
        <h3>ASSEMBLY ELECTIONS</h3>
        <p>General Election to Legislative Assembly of NCT of Delhi</p>
        </div>
        <div className="currmain" onClick={()=>navigate('/Bye')}>
        <img src="group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
          <h3>BYE ELECTIONS</h3>
          <p>Schedule for bye-election to 2 Assembly Constituencies of Uttar Pradesh and Tamil Nadu - reg</p>
        </div>
      </div>
          <div className="lower">
      <h1 className="currhead" onClick={handleRedirect}>Previous Elections</h1>
      <div className="currRow">
        <div className="currmain">
        <img src="group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
        <h3>ASSEMBLY ELECTIONS</h3>
        <p>General Election to Legislative Assembly of Maharastra</p>
        </div>
        <div className="currmain" onClick={()=>navigate('/Bye')}>
        <img src="group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
        <h3>BYE ELECTIONS</h3>
        <p>Schedule for bye-election to 2 Assembly Constituencies of Jharkhand and Uttra Khand</p>
        </div>
        
      </div>
      </div>
      <div className="currmain1" onClick={()=>navigate('/Bye')}>

        <h2>BYE Elections</h2>
        
        <p>Schedule for bye-election to 48 Assemblies Constituencies and 2 Parliamentary Constituencies of 15-States</p>
      </div>
    </div>
            <div className="pastElec">
            <h1 className="passhead">Past Election</h1>
              <div className="pastrow">
                <div className="pastmain">
                <img src="group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                  <h3>General Election</h3>
                  <p>General Election was held to constitute the lok sabha , electing memberrs of parliamentary for all 543 parliamentary constituencies of India.</p>
                </div>
                <div className="pastmain">
                <img src="group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                  <h3>Assembly Elections</h3>
                  <p>The Legislative Assembly elections in India are held in every 5 years in whcih the Indian electorate choose the members of the Vidhan Sabha </p>
                  </div>
                <div className="pastmain">
                <img src="group_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" />
                  <h3>Bye Elections</h3>
                  <p>Bye-Elections are used to fill elected offices that have become vacant between general elections.</p>
                </div>
                </div>
                <div className="terms">
                  <h2>Terms of the Houses</h2>
                  <p>Details of terms of the Union Parliament and the Legislative Assemblies </p>
                </div>
            </div>

          </div>
        )}
      {results && (
         <div>
          <div className="elecresult">
            <h1 className="resulthead">---  Election Results  ---</h1>
            <p className="resultp">ECI is displaying the information as being filled in the system by the Returning Officers from their respective Counting Centres. The final data for each AC/PC will be shared in Form-20</p>
            <button className="resultb" onClick={()=>navigate('/Result')}>View Details --</button>
          </div>
    <div className="statelec">
  <h1 className="stathead">Result Statics</h1>
  <div className="statgrid">
    <div className="statmain" onClick={()=>navigate('/Stats')}>General Parliamentary Election Results</div>
    <div className="statmain" onClick={()=>navigate('/Result')}>State Legislative</div>
    <div className="statmain" onClick={()=>navigate('/Result')}>Link to Form 20</div>
    <div className="statmain" onClick={()=>navigate('/Result')}>Detailed Bye-elections Results</div>
    <div className="statmain" onClick={()=>navigate('/Result')}>Miscellaneous Statistics</div>
    <div className="statmain" onClick={()=>navigate('/Result')}>Bye-election Results (Form 21D &E)</div>
  </div>
</div>

         </div>
        )}
        {conduct && (
          <div className="condelec">
            <h1 className="condhead">Conduct of Elections</h1>
            <div className="condgrid">
            <div className="condmain">Handbook/Manuals/Model Check list</div>
            <div className="condmain">Training Material</div>
            <div className="condmain">Electoral Roll Management</div>
            <div className="condmain">Grievance redressal</div>
            <div className="condmain">Postal Ballet</div>
            <div className="condmain">Citizen Complain during MCC</div>
            <div className="condmain">Compendium of Instructions</div>
            <div className="condmain">FAQs</div>
            <div className="condmain">Election Planning & Vacancy Management</div>
            <div className="condmain">Scrutiny of Nominations</div>
            <div className="condmain">Permission Management</div>
            <div className="condmain">Observer Portal </div>
  </div>
          </div>
        )}
        {refDocs && (
          <div className="refdoc">
            <h1 className="refhead">---Referenced Documents---</h1>
            <div className="refgrid">
            <div className="refmain">
            <h1>Important Instruction</h1>
            <p>Important instruction for election officials</p>
          </div>
          <div className="refmain">
          <h1>Electoral Rolls</h1>
          <p>This section contains information related to Summary Revision Calendar, E-roll, Data, Forms for registration in E-roll, and EPIC.</p>
          </div>
            <div className="refmain">
            <h1>Model Code of Conduct</h1>
            <p>Model Code of Conduct for the guidance of political parties and candidates</p>
            </div>
            <div className="refmain">
          <h1>Election Law</h1>
          <p>Detailed information on election laws, landmark judgments, procedures, and reforms.</p>
           </div>
          <div className="refmain">
          <h1>Judicial Reference</h1>
          <p>Information related to the office of profit</p>
          </div>
          <div className="refmain">
          <h1>Delimitation</h1>
          <p>Process of fixing limits or boundaries of territorial constituencies.</p>
          </div>
            </div>
          </div>

        )}
    </div>
  );
};

export default Home;








// .options{
//   width: 100%;
//   background: rgb(142, 142, 87);
//   height: 110px;
//   display: flex;
// }


// .options-head:hover {
//   background-color: #ddd;
// }

// .options-head.active {
//   background-color: #333;
//   color: white;
//   font-weight: bold;
// }

// .option-content {
//   margin-top: 20px;
//   font-size: 16px;
//   color: #555;
//   background: #f0f0f3;
//   padding: 15px;
//   border-left: 5px solid #333;
// }

