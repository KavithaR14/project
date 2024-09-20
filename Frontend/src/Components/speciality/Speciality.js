import React from 'react';
import generalphysicianImg from './generalphysician.svg';
import gynecologistImg from './gynecologist.svg';
import DermatologistImg from './Dermatologist.svg';
import PediatriciansImg from './Pediatricians.svg';
import NeurologistImg from './Neurologist.svg';
import GastroenterologistImg from './Gastroenterologist.svg';
import './Speciality.css';

const Speciality = () => {
  return (
    <section className="speciality-section">
      <h2>Find by Speciality</h2>
      <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className="specialities">
        <div>
          <img src={generalphysicianImg} alt="General Physician" />
          <span>General physician</span>
        </div>
        <div>
          <img src={gynecologistImg} alt="Gynecologist" />
          <span>Gynecologist</span>
        </div>
        <div>
          <img src={DermatologistImg} alt="Dermatologist" />
          <span>Dermatologist</span>
        </div>
        <div>
          <img src={PediatriciansImg} alt="Pediatricians" />
          <span>Pediatricians</span>
        </div>
        <div>
          <img src={NeurologistImg} alt="Neurologist" />
          <span>Neurologist</span>
        </div>
        <div>
          <img src={GastroenterologistImg} alt="Gastroenterologist" />
          <span>Gastroenterologist</span>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
