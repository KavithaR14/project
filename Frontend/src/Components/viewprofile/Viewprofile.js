// src/components/ViewProfile.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ViewProfile.css';

const ViewProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`/api/doctors/${id}`);
        if (!response.ok) {
          throw new Error('Doctor not found');
        }
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="container">
      <div className="card info-section">
        <img src={doctor.image} alt="Doctor Photo" className="doctor-photo" />
        <h2>{doctor.name}</h2>
        <div className="info-item">
          <p className="label">Age</p>
          <p className="value">{doctor.age}</p>
        </div>
        <div className="info-item">
          <p className="label">Experience</p>
          <p className="value">{doctor.experience} years</p>
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
