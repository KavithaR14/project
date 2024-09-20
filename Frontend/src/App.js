import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header"; // Import your Header component
import DoctorList from "./Components/doctor/DoctorList"; // Import DoctorList component
import Hospital from "./Components/Hospital/Hospital"; // Import Hospital component
import Homepage from "./Components/home/HomePage";
import TimeSlotSelection from './Components/Booknow/TimeSlotSelection';
// import About from "./About"; // Import About component
// // import Contact from "./Contact"; // Import Contact component
// import Login from "./Components/login/Login"; // Import Login component
import ViewProfile from './Components/view profile/ViewProfile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/timeslot-selection" element={<TimeSlotSelection />} />
        <Route path="/view-profile/:id" element={<ViewProfile />} />
        {/* {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/login" element={<Login />} />  */}
        
      </Routes>
    </Router>
  );
}

export default App;
