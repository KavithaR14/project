import React from 'react';
import './Contact.css'; // Ensure this file exists
import doctorImage from './contact_image.png'; // Adjust the path as needed

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="r-container">
        <h1>CONTACT US</h1>
        
        <div className="office-details">
          <h2>OUR OFFICE</h2>
          <p>
            123 Healthcare Lane,<br />
            Health City, HC 45678<br />
            Tel: +1 (234) 567-8900<br />
            Email: CuraSlotHcare@gmail.com
          </p>
        </div>

        <div className="career-section">
          <h2>CAREERS AT CURASLOT</h2>
          <p>
            Join our dynamic team dedicated to improving healthcare services.
            We are looking for passionate individuals to help us innovate.
          </p>
        </div>
      </div>

      <div className="l-container">
        <img src={doctorImage} alt="Doctor" className="contact-image" />
      </div>
    </div>
  );
};

export default Contact;