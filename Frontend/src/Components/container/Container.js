import React from 'react';
import doctorImage from './doctorImage.png'; // Adjust the path to your image
import './Container.css';

const Container = () => {
  return (
    <section className="hero-section1">
      <div>
        <div>
          <h1>Book Appointment With 100+ Trusted Doctors</h1>
          <button>Create account</button>
        </div>
        <div>
          <img src={doctorImage} alt="Doctor" />
        </div>
      </div>
    </section>
  );
};

export default Container;
