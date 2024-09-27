import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header"; // Import your Header component
import DoctorList from "./Components/doctor/DoctorList"; // Import DoctorList component
import Hospital from "./Components/Hospital/Hospital"; // Import Hospital component
import Homepage from "./Components/home/HomePage";
import TimeSlotSelection from './Components/Booknow/TimeSlotSelection';
import About from "./Components/about/About"; // Import About component
import Contact from './Components/contact/Contact';// Import Contact component
import Login from "./Components/login/Login"; // Import Login component
// import Viewprofilelist from './Components/viewprofile/Viewprofilelist';
import Signup from './Components/signup/Signup';
import Adminpanal from './Components/adminpanal/Adminpanal';
import AdminLogin from './Components/adminlogin/AdminLogin';
import Appointment from './Components/appointment/Appointment';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/timeslot-selection" element={<TimeSlotSelection />}/>
        {/* <Route path="/view-profile/:id" element={<ViewProfile />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Adminpanal" element={<Adminpanal />} />
        <Route path="/AdminLogin" element={<AdminLogin />} /> 
        <Route path="/Appointment" element={<Appointment/>}/>
        {/* <Route path="/view-profilelist/:id" element={<Viewprofilelist/>} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
