import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [medications, setMedications] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Function to handle radio button changes for medication
  const handleMedicationChange = (event) => {
    setMedications(event.target.value === 'Yes');
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create appointment data object
    const appointmentData = {
      patientName: document.getElementById('patient-name').value,
      phoneNumber: document.getElementById('phone-number').value,
      email: document.getElementById('email').value,
      age: document.getElementById('age').value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      address: document.getElementById('address').value,
      symptoms: document.getElementById('symptoms').value,
      specialist: document.getElementById('specialist').value,
      appointmentDate: document.getElementById('date').value,
      appointmentTime: document.getElementById('time').value,
      medications: medications,
      medicationList: medications ? document.getElementById('list').value : '',
      doctorId: 'doctor-id', // Replace with actual doctor ID
    };

    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5004/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();

      if (response.ok) {
        setConfirmationMessage('Your appointment has been confirmed!');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">
        <div className="appointment-box">
          <h2>APPOINTMENT FORM</h2>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="patient-name">Patient Name</label>
              <input type="text" name="patient-name" id="patient-name" required />
            </div>
            <div className="input">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="text" name="phone-number" id="phone-number" required />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="input">
              <label htmlFor="age">Age</label>
              <input type="number" name="age" id="age" required />
            </div>
            <div className="radio-group">
              <label>Gender</label>
              <input type="radio" name="gender" value="male" id="male" required />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" value="female" id="female" required />
              <label htmlFor="female">Female</label>
            </div>
            <div className="input">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" required />
            </div>
            <div className="input">
              <label htmlFor="symptoms">Symptoms</label>
              <input type="text" name="symptoms" id="symptoms" required />
            </div>
            <div className="input">
              <label htmlFor="specialist">Specialist</label>
              <input type="text" name="specialist" id="specialist" required />
            </div>
            <div className="input">
              <label htmlFor="date">Date of Appointment</label>
              <input type="date" name="date" id="date" required />
            </div>
            <div className="input">
              <label htmlFor="time">Appointment Time</label>
              <input type="time" name="time" id="time" required />
            </div>
            <div className="radio-group">
              <label>Taking Any Medications Currently?</label>
              <input 
                type="radio" 
                name="medications" 
                value="Yes" 
                id="Yes"
                onChange={handleMedicationChange}
              />
              <label htmlFor="Yes">Yes</label>
              <input 
                type="radio" 
                name="medications" 
                value="No" 
                id="No"
                onChange={handleMedicationChange}
              />
              <label htmlFor="No">No</label>
            </div>
            <div className="input">
              <label htmlFor="list">If yes, please list:</label>
              <input 
                type="text" 
                name="list" 
                id="list" 
                disabled={!medications} 
              />
            </div>
            <div className="submit">
              <button type="submit">Confirm Appointment</button>
            </div>
          </form>
          {confirmationMessage && (
            <p className="confirmation-message">{confirmationMessage}</p>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Appointment;
