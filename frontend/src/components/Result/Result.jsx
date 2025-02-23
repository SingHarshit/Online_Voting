import React, { useState } from "react";
import HomeNav from "../HomeNav/HomeNav";
import './Result.css'

const Result = () => {
    const [AC,setAC]=useState(true);
    const [PC,setPC]=useState(false);
    const [ACB,setACB]=useState(false);
  

  const handleClick = (option) => {
    setAC(option=="AC");
    setPC(option=="PC");
    setACB(option=="ACB");
  };

  return (
    <div>
      <HomeNav />
      <div className="discl">
        <p>
          Disclaimer: ECI is displaying the information as being filled in the
          system by the Returning Officers from their respective Counting
          Centres. The final data for each AC/PC will be shared in Form-20.
        </p>
        <h3 className="head">
          General Election to Assembly Constituencies: Trends & Results
          November-2024
        </h3>
        <div className="option">
        <div
    className={`options-head ${AC ? "active" : ""}`}
    onClick={() => handleClick("AC")}
  >
    AC General Election
  </div>
  <div
    className={`options-head ${PC ? "active" : ""}`}
    onClick={() => handleClick("PC")}
  >
    PC Bye Election
  </div>
  <div
    className={`options-head ${ACB ? "active" : ""}`}
    onClick={() => handleClick("ACB")}
  >
    AC Bye Election
  </div>

        </div>
        
      </div>
      {AC && (
        <div className="container">
            <div className="result">
              <div>
                <h2 className="resulhead">Jharkhand</h2>
                <p>Assembly Constituencies  81</p>
                <div className="seats">
                  <h3 className="seatshead">Parties</h3>
                  <h3 className="seatswon">Leading/Won</h3>
                  <div className="parties">
                    <h3>BJP</h3>
                    <h3>34</h3>
                  </div>
                  <div className="parties">
                    <h3>JMM</h3>
                    <h3>21</h3>
                  </div>
                  <div className="parties">
                    <h3>INC</h3>
                    <h3>16</h3>
                  </div>
                  <div className="parties">
                    <h3>RJD</h3>
                    <h3>4</h3>
                  </div>
                  <div className="parties">
                    <h3>CPJ</h3>
                    <h3>2</h3>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="result">
              <div>
                <h2 className="resulhead">Jharkhand</h2>
                <p>Assembly Constituencies  81</p>
                <div className="seats">
                  <h3 className="seatshead">Parties</h3>
                  <h3 className="seatswon">Leading/Won</h3>
                  <div className="parties">
                    <h3>BJP</h3>
                    <h3>34</h3>
                  </div>
                  <div className="parties">
                    <h3>JMM</h3>
                    <h3>21</h3>
                  </div>
                  <div className="parties">
                    <h3>INC</h3>
                    <h3>16</h3>
                  </div>
                  <div className="parties">
                    <h3>RJD</h3>
                    <h3>4</h3>
                  </div>
                  <div className="parties">
                    <h3>CPJ</h3>
                    <h3>2</h3>
                  </div>
                </div>
              </div>
              
            </div>
        </div>)}
        {PC && (
        <div className="container">
            <div
  className="resultPC"
  style={{ textAlign: "center", padding: "20px", border: "2px solid black" }}
>
  <h1
    className="resulthead"
    style={{ fontWeight: "bold", fontSize: "24px", color: "#333" }}
  >
    Wayanad(4)
  </h1>
  <p className="resultp" style={{ color: "blue", fontSize: "16px" }}>Kerala</p>
  <h2 style={{ color: "green", fontWeight: "bold" }}>WON</h2>
  <p style={{ color: "red", fontSize: "16px" }}>Priyanka Gandhi Vadra</p>
  <p style={{ color: "red", fontSize: "16px" }}>India National Congress</p>
</div>

<div
  className="resultPC"
  style={{ textAlign: "center", padding: "20px", border: "2px solid black" }}
>
  <h1
    className="resulthead"
    style={{ fontWeight: "bold", fontSize: "24px", color: "#333" }}
  >
    Nanded(16)
  </h1>
  <p className="resultp" style={{ color: "blue", fontSize: "16px" }}>Maharastra</p>
  <h2 style={{ color: "green", fontWeight: "bold" }}>WON</h2>
  <p style={{ color: "red", fontSize: "16px" }}>Chavan Ravindra Vasantrao</p>
  <p style={{ color: "red", fontSize: "16px" }}>India National Congress</p>
</div>


        </div>)}
        {ACB && (
        <div className="container3">
        <div className="resultAC">
          <h1 className="resultheadAC">Wayanad(4)</h1>
          <p className="resultACP">Kerala</p>
          <h2>WON</h2>
          <p> Priyanka Gandhi Vadra</p>
          <p>India National Congress</p>

        </div>
        <div className="resultAC">
          <h1 className="resultheadAC">Wayanad(4)</h1>
          <p className="resultACP">Kerala</p>
          <h2>WON</h2>
          <p> Priyanka Gandhi Vadra</p>
          <p>India National Congress</p>

        </div>
        <div className="resultAC">
          <h1 className="resultheadAC">Wayanad(4)</h1>
          <p className="resultACP">Kerala</p>
          <h2>WON</h2>
          <p> Priyanka Gandhi Vadra</p>
          <p>India National Congress</p>

        </div>
        <div className="resultAC">
          <h1 className="resultheadAC">Wayanad(4)</h1>
          <p className="resultACP">Kerala</p>
          <h2>WON</h2>
          <p> Priyanka Gandhi Vadra</p>
          <p>India National Congress</p>

        </div>
        <div className="resultAC">
          <h1 className="resultheadAC">Wayanad(4)</h1>
          <p className="resultACP">Kerala</p>
          <h2>WON</h2>
          <p> Priyanka Gandhi Vadra</p>
          <p>India National Congress</p>

        </div>
        <div className="resultAC">
          <h1 className="resultheadAC">Wayanad(4)</h1>
          <p className="resultACP">Kerala</p>
          <h2>WON</h2>
          <p> Priyanka Gandhi Vadra</p>
          <p>India National Congress</p>

        </div>

        <div className="resultAC">
          <h1 className="resultheadAC">Wayanad(4)</h1>
          <p className="resultACP">Kerala</p>
          <h2>WON</h2>
          <p> Priyanka Gandhi Vadra</p>
          <p>India National Congress</p>

        </div>
        <div className="resultAC">
          <h1 className="resultheadAC">Wayanad(4)</h1>
          <p className="resultACP">Kerala</p>
          <h2>WON</h2>
          <p> Priyanka Gandhi Vadra</p>
          <p>India National Congress</p>

        </div>
        

    </div>)}



    </div>
  );
};

export default Result;
