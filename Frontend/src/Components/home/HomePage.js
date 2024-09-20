import React from 'react';
         // Go up one level and into 'header'
import HeroSection from "../herosection/HeroSection"; // Go up one level and into 'herosection'
import Speciality from "../speciality/Speciality";
import Container from "../container/Container";
import Footer from '../footer/Footer';
import './HomePage.css';  // Ensure this CSS file exists in the current folder

const Homepage = () => {
  return (
    <div className="homepage">
      
      <HeroSection />
      <Speciality />
      <Container />
      <Footer />
    </div>
  );
};

export default Homepage;
