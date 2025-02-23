import React from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import './index.css'
import Registration from "./components/Registration/Registration";
import Read from "./components/Read/Read";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Election from "./components/Election/Election";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import './App.css';
import Candidates from "./components/Election/Candidates/Candidates";
import Vote from "./components/Election/Vote/Vote";
import Result from "./components/Result/Result";
import Stats from "./components/Stats/Stats";
import Bye from "./components/Bye/Bye";
import ProtectedRoute from "./components/Protected/Protected";
import Verify from "./components/Verify/Verify"



const App = () => {
  const location = useLocation();
  return (
    <div>
    {location.pathname !== '/Home' && location.pathname !== '/Election' && location.pathname !== '/Election/Candidates' 
    && location.pathname !== '/Election/Vote' && location.pathname !== '/Result' &&
    location.pathname !== '/Stats'&& location.pathname !== '/Bye' && <Navbar />}
    

      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <div className="body">
              <img src="/image.png" alt="" />
              <h2 className="main-heading">Be a part of</h2>
              <h2 className="highlight">Vote Today</h2>

              <div className="button-container">
                <button className="btn register" onClick={() => window.location.href = "/Registration"}>
                  Register
                </button>
                <button className="btn read-more" onClick={() => window.location.href = "/Read"}>
                  Read More
                </button>
              </div>
            </div>
           
          }
        />

        {/* Registration and Read routes */}
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Verify" element={<Verify/>}/>

      <Route element={<ProtectedRoute/>}>
        <Route path="/Home" element={<Home/>} /> 
        <Route path="/Election" element={<Election />} />
        <Route path="/Election/Candidates" element={<Candidates/>} />
        <Route path="/Election/Vote" element={<Vote/>}/>
        <Route path="/Result" element={<Result/>} />  {/* Navigate to /Result when clicked */}
        <Route path="/Stats" element={<Stats/>} /> 
        <Route path="/Bye" element={<Bye/>} />  {/* Navigate to /Bye when clicked */}
          </Route>
        {/* 404 fallback route */}
        <Route path="*" element={<h2>404: Page not found</h2>} />
      </Routes>
    </div>
  );
};

export default App;
