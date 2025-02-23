import React, { useState } from "react";
import HomeNav from "../HomeNav/HomeNav";
import './Stats.css'

const Stats = () => {
    const [selectedOption, setSelectedOption] = useState( "General Election to Loksabha");

    const electionData = {
        "General Election to Loksabha": [
            { year: "2014", party: "BJP", seats: 282 },
            { year: "2019", party: "BJP", seats: 303 },
            { year: "2018", party: "Congress", seats: 99 },
            { year: "2023", party: "BJP", seats: 117 },
            { year: "1960", party: "Congress", seats: 356 },
            { year: "1977", party: "Janata Party", seats: 295 },
            { year: "2014", party: "BJP", seats: 282 },
            { year: "2019", party: "BJP", seats: 303 },
            
        ],
        "General Election to State Legislative Assembly": [
            { year: "2018", party: "Congress", seats: 99 },
            { year: "2023", party: "BJP", seats: 117 },
            { year: "2014", party: "BJP", seats: 282 },
            { year: "2019", party: "BJP", seats: 303 },
            { year: "1960", party: "Congress", seats: 356 },
            { year: "1977", party: "Janata Party", seats: 295 },
            { year: "2014", party: "BJP", seats: 282 },
            { year: "2019", party: "BJP", seats: 303 },
        ],
        "Bye-Elections Results": [
            { year: "2021", party: "AAP", seats: 5 },
            { year: "2022", party: "BJP", seats: 8 },
            { year: "2014", party: "BJP", seats: 282 },
            { year: "2019", party: "BJP", seats: 303 },
            { year: "2018", party: "Congress", seats: 99 },
            { year: "2023", party: "BJP", seats: 117 },
            { year: "2014", party: "BJP", seats: 282 },
            { year: "2019", party: "BJP", seats: 303 },
        ],
        "Assembly Election of States which are No longer in existence After Recognition": [
            { year: "1960", party: "Congress", seats: 356 },
            { year: "1977", party: "Janata Party", seats: 295 },
            { year: "2014", party: "BJP", seats: 282 },
            { year: "2019", party: "BJP", seats: 303 },
        ]
    };

    return (
        <div>
            <HomeNav />
            <div className="headinge">
                <h1>Election Results - Full Statistical Reports</h1>
            </div>

            <div className="optionsS">
                {Object.keys(electionData).map((option, index) => (
                    <div
                        key={index}
                        className={`optionhead ${selectedOption === option ? "active" : ""}`}
                        onClick={() => setSelectedOption(option)}
                    >
                        <h3>{option}</h3>
                    </div>
                ))}
            </div>

            {/* Table appears when an option is selected */}
            {selectedOption && (
                <div className="result-table">
                    <h2>{selectedOption} - Results</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Winning Party</th>
                                <th>Seats Won</th>
                            </tr>
                        </thead>
                        <tbody>
                            {electionData[selectedOption].map((data, idx) => (
                                <tr key={idx}>
                                    <td>{data.year}</td>
                                    <td>{data.party}</td>
                                    <td>{data.seats}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Stats;
