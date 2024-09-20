import React from 'react';
import header_img from './header_img.png'; // Ensure the correct path to your image file
import groupProfilesImg from './group_profiles.png'; // Import the group_profiles image
import './Herosection.css';

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>Book Appointment With Trusted Doctors</h1>
        <div className="intro-text">
          <img src={groupProfilesImg} alt="Group Profiles" className="group-profiles-img" /> 
          <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>
        <button className="book-btn">Book appointment</button>
      </div>
      <div className="hero-image">
        <img src={header_img} alt="healthcare logo" />
      </div>
    </header>
  );
};

export default HeroSection;
