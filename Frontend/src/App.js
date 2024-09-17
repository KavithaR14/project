import React from "react";
import "./Components/doctor/Doctor.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DoctorList from "./Components/doctor/DoctorList";
import Hospital from "./Components/Hospital/Hospital.js";
import Filters from "./Components/doctor/Filters.js"; 
import TimeSlotSelection from "./Components/Booknow/TimeSlotSelection.js";// Assuming you have a Filters component
import HomePage from "./Components/home/HomePage.js";

function App() {
  return (

   


    <Router>
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/doctor" element={<DoctorList/>} />
          {/* <Route path="/hospital" element={<Hospital/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
