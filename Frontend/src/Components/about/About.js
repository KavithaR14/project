import React from 'react';
import './About.css'; // Link to the CSS file
import doctorImage from './about_image.png'; // Adjust the path as needed
// import Footer from '../footer/Footer';

const About = () => {
  return (
    <div className="about-container">
      {/* Left Side: About Content */}
      <div className="right-container">
        <h1>ABOUT US</h1>
        <p>
          Welcome to CuraSlot, your trusted partner in managing your healthcare needs conveniently and efficiently. At CuraSlot, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.

          CuraSlot is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, CuraSlot is here to support you every step of the way.
        </p>
        <h2>OUR VISION</h2>
        <p>
          Our vision at CuraSlot is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
        </p>
      </div>

      {/* Right Side: Doctor Image */}
      <div className="left-container">
        <img src={doctorImage} alt="Doctor" className="about-image" />
      </div>
    </div>
  );
};

export default About;