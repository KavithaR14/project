import React from "react";
import { useNavigate } from "react-router-dom";
import './Doctor.css';

const DoctorProfile = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/timeslot-selection");
  };

  const handleViewProfileClick = () => {
    navigate(`/view-profile/${doctor.id}`);
  };

  return (
    <div className="doctor-profile">
      <img src={doctor.imgSrc} alt="Doctor" className="doctor-image" />
      <div className="doctor-info">
        <h2>{doctor.name}</h2>
        <p>Specialization: {doctor.specialization}</p>
        <p>Rating: {doctor.rating}/5</p>
        <p>Location: {doctor.location}</p> {/* Display the location here */}
        <button className="view-profile" onClick={handleViewProfileClick}>
          View Profile
        </button>
        <button className="book-now" onClick={handleBookNowClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
