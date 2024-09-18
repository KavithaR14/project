import React from "react";
import "./Components/doctor/Doctor.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorList from "./Components/doctor/DoctorList";
import HomePage from "./Components/home/HomePage"; // Import HomePage
import Hospital from "./Components/Hospital/Hospital"; 
// Import Hospital

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Add HomePage route */}
          <Route path="/doctor" element={<DoctorList />} />
          <Route path="/hospital" element={<Hospital />} /> {/* Add Hospital route */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
