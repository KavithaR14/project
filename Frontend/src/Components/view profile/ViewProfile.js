// src/components/ViewProfile.js
import React from "react";
import { useParams } from "react-router-dom";
import './ViewProfile.css';

const ViewProfile = () => {
  const { id } = useParams();

  // You can use this id to fetch doctor details if needed
  // For now, let's assume it's hardcoded for simplicity
  const doctor = {
    id,
    name: "Dr. John Doe",
    imgSrc: "https://leman-clinic.ch/wp-content/uploads/2018/11/02.jpg",
    age: 34,
    experience: "6 years",
    specialization: "Dentist",
    languages: "English, Spanish",
    email: "johndoe@hospital.com",
    phone: "+123-456-7890",
    description: "Dr. John Doe is a skilled dentist specializing in general and cosmetic dentistry, dedicated to providing personalized dental care with a focus on patient comfort and oral health."
  };

  return (
    <div className="container">
      <div className="card info-section">
        <img src={doctor.imgSrc} alt="Doctor Photo" className="doctor-photo" />
        <h2>{doctor.name}</h2>
        <div className="info-item">
          <p className="label">Age</p>
          <p className="value">{doctor.age}</p>
        </div>
        <div className="info-item">
          <p className="label">Experience</p>
          <p className="value">{doctor.experience}</p>
        </div>
        <div className="info-item">
          <p className="label">Specialization</p>
          <p className="value">{doctor.specialization}</p>
        </div>
        <div className="info-item">
          <p className="label">Languages</p>
          <p className="value">{doctor.languages}</p>
        </div>
        <div className="info-item">
          <p className="label">Email</p>
          <p className="value">{doctor.email}</p>
        </div>
        <div className="info-item">
          <p className="label">Phone</p>
          <p className="value">{doctor.phone}</p>
        </div>
        <div className="description-text">{doctor.description}</div>
      </div>
    </div>
  );
};

export default ViewProfile;
