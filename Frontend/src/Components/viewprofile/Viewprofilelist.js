import React from 'react';
import { useNavigate } from 'react-router-dom';
// import viewprofile from './viewprofile/Viewprofilelist';

import './viewprofilelist.css'; // Link to the CSS file


// Mock data for multiple doctors
const doctors = [
  {
    id: 1,
    name: 'Dr. Johndoe, MBBS',
    age: 34,
    experience: 6,
    specialization: 'Dentist',
    languages: 'English, Spanish',
    email: 'johndoe@hospital.com',
    phone: '+123-456-7890',
    description: 'Dr. John Doe is a skilled dentist specializing in general and cosmetic dentistry.',
    image: 'doctor1.png', // Add image paths as needed
  },
  {
    id: 2,
    name: 'Dr. Jane Smith, MD',
    age: 40,
    experience: 12,
    specialization: 'Cardiologist',
    languages: 'English, French',
    email: 'janesmith@hospital.com',
    phone: '+123-456-7891',
    description: 'Dr. Jane Smith is a cardiologist with over 12 years of experience.',
    image: 'doctor2.png',
  },
  {
    id: 3,
    name: 'Dr. Emily White, DO',
    age: 38,
    experience: 10,
    specialization: 'Pediatrician',
    languages: 'English, Mandarin',
    email: 'emilywhite@hospital.com',
    phone: '+123-456-7892',
    description: 'Dr. Emily White specializes in pediatric care.',
    image: 'doctor3.png',
  },
  {
    id: 4,
    name: 'Dr. Mark Brown, MD',
    age: 45,
    experience: 15,
    specialization: 'Orthopedic Surgeon',
    languages: 'English, German',
    email: 'markbrown@hospital.com',
    phone: '+123-456-7893',
    description: 'Dr. Mark Brown specializes in orthopedic surgery and sports medicine.',
    image: 'doctor4.png',
  },
  {
    id: 5,
    name: 'Dr. Sarah Green, MD',
    age: 32,
    experience: 8,
    specialization: 'Dermatologist',
    languages: 'English, Italian',
    email: 'sarahgreen@hospital.com',
    phone: '+123-456-7894',
    description: 'Dr. Sarah Green is a dermatologist with a focus on skin cancer.',
    image: 'doctor5.png',
  },
  {
    id: 6,
    name: 'Dr. James Black, MD',
    age: 50,
    experience: 20,
    specialization: 'Neurologist',
    languages: 'English, Hindi',
    email: 'jamesblack@hospital.com',
    phone: '+123-456-7895',
    description: 'Dr. James Black specializes in neurology and brain health.',
    image: 'doctor6.png',
  },
  {
    id: 7,
    name: 'Dr. Patricia Grey, MD',
    age: 41,
    experience: 14,
    specialization: 'Obstetrician/Gynecologist',
    languages: 'English, French',
    email: 'patriciagrey@hospital.com',
    phone: '+123-456-7896',
    description: 'Dr. Patricia Grey provides comprehensive care for women.',
    image: 'doctor7.png',
  },
  {
    id: 8,
    name: 'Dr. William Blue, MD',
    age: 37,
    experience: 9,
    specialization: 'Endocrinologist',
    languages: 'English, Spanish',
    email: 'williamblue@hospital.com',
    phone: '+123-456-7897',
    description: 'Dr. William Blue specializes in diabetes and hormone-related conditions.',
    image: 'doctor8.png',
  },
  {
    id: 9,
    name: 'Dr. Olivia Yellow, MD',
    age: 29,
    experience: 5,
    specialization: 'Family Medicine',
    languages: 'English, Mandarin',
    email: 'oliviayellow@hospital.com',
    phone: '+123-456-7898',
    description: 'Dr. Olivia Yellow focuses on family medicine and preventive care.',
    image: 'doctor9.png',
  },
  {
    id: 10,
    name: 'Dr. David Red, MD',
    age: 55,
    experience: 25,
    specialization: 'Oncologist',
    languages: 'English, Arabic',
    email: 'davidred@hospital.com',
    phone: '+123-456-7899',
    description: 'Dr. David Red is an oncologist with extensive experience in cancer care.',
    image: 'doctor10.png',
  },
];

const ViewProfilelist = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
  
    const handleViewProfileClick = (id) => {
      navigate(`/view-profile/${id}`); // Navigate to the profile based on the doctor's ID
    };
  
    return (
      <div className="doctor-list-container">
        
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={`${doctor.name} Photo`} className="doctor-photo" />
            <h2>{doctor.name}</h2>
            <p>Age: {doctor.age}</p>
            <p>Experience: {doctor.experience} years</p>
            <p>Specialization: {doctor.specialization}</p>
            <p>Languages: {doctor.languages}</p>
            <p>Email: {doctor.email}</p>
            <p>Phone: {doctor.phone}</p>
            <p>{doctor.description}</p>
            <button className="book-btn" onClick={() => handleViewProfileClick(doctor.id)}>
              View Profile
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ViewProfilelist;