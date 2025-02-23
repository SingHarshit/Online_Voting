import React, { useState } from "react";
import "./Bye.css"; // Import the CSS file
import HomeNav from "../HomeNav/HomeNav";

const Bye = () => {
    // State to track selected year
    const [selectedYear, setSelectedYear] = useState("2025");

    // Data for different years
    const electionDates = {
        "2025": {
            notification: "10-01-2025",
            nominations: "17-01-2025",
            scrutiny: "18-01-2025",
            withdrawal: "20-01-2025",
            poll: "05-02-2025",
            counting: "08-02-2025",
            completion: "10-02-2025"
        },
        "2024": {
            notification: "12-01-2024",
            nominations: "19-01-2024",
            scrutiny: "20-01-2024",
            withdrawal: "22-01-2024",
            poll: "10-02-2024",
            counting: "14-02-2024",
            completion: "16-02-2024"
        },
        "2023": {
            notification: "08-01-2023",
            nominations: "15-01-2023",
            scrutiny: "16-01-2023",
            withdrawal: "18-01-2023",
            poll: "03-02-2023",
            counting: "07-02-2023",
            completion: "09-02-2023"
        },
        "2010": {
            notification: "08-01-2023",
            nominations: "15-01-2023",
            scrutiny: "16-01-2023",
            withdrawal: "18-01-2023",
            poll: "03-02-2023",
            counting: "07-02-2023",
            completion: "09-02-2023"
        },
        "2022": {
            notification: "08-01-2023",
            nominations: "15-01-2023",
            scrutiny: "16-01-2023",
            withdrawal: "18-01-2023",
            poll: "03-02-2023",
            counting: "07-02-2023",
            completion: "09-02-2023"
        },
        "2021": {
            notification: "08-01-2023",
            nominations: "15-01-2023",
            scrutiny: "16-01-2023",
            withdrawal: "18-01-2023",
            poll: "03-02-2023",
            counting: "07-02-2023",
            completion: "09-02-2023"
        }
    };

    return (
        <div>
            <HomeNav/>
            <div className="picture">
                <img src="image copy 6.png" alt="" />
                <img src="image copy 5.png" alt="" />
                <img src="image copy 7.png" alt="" />
            </div> 
            <div className="headingb">
                <h1 className="head">BYE ELECTIONS</h1>
                <p>Bye-Elections (also known as bypolls) are used to fill elected offices that have become vacant between general elections.</p>
                
                {/* Year Selection Options */}
                <div className="optionsb">
                    {Object.keys(electionDates).map((year) => (
                        <h3 
                            key={year}
                            className={`year-option ${selectedYear === year ? "active" : ""}`}
                            onClick={() => setSelectedYear(year)}
                        >
                            {year}
                        </h3>
                    ))}
                </div>
            </div>

            {/* Dates Section */}
            <div className="dates">
                <h1 className="datehead">Important Dates : Phase 1 (All 70 ACs) - {selectedYear}</h1>
                <h2 className="datemain">Date of Issue of Gazette Notification : {electionDates[selectedYear].notification}</h2>
                <h2 className="datemain">Last Date of Nominations : {electionDates[selectedYear].nominations}</h2>
                <h2 className="datemain">Date for Scrutiny of Nominations : {electionDates[selectedYear].scrutiny}</h2>
                <h2 className="datemain">Last Date for Withdrawal of Candidatures : {electionDates[selectedYear].withdrawal}</h2>
                <h2 className="datemain">Date of Poll : {electionDates[selectedYear].poll}</h2>
                <h2 className="datemain">Date of Counting : {electionDates[selectedYear].counting}</h2>
                <h2 className="datemain">Date before which Election shall be Completed : {electionDates[selectedYear].completion}</h2>
            </div>
        </div>
    );
};

export default Bye;



 