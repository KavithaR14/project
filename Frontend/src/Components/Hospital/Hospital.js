import React, { useState } from "react"; 
// import { useNavigate } from 'react-router-dom';
// import HospitalDetails from './HospitalDetails';
import './Hospital.css';

function Hospital() {
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  // const navigate = useNavigate();

  const hospitals = [
    {
      name: "H Hospital",
      location: "Tripicane",
      specialty : "cardiologist,Neurology",
      image: "https://th.bing.com/th/id/OIP.PkPLrfcdipbQ0vULEqi-0AHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "A leading hospital in Villupuram providing quality healthcare."
    },
    {
      name: "Central Hospital",
      location: "Tambaram",
      specialty: "Cardiologist,Orthopedic",
      image: "https://th.bing.com/th/id/OIP.U_N09IF8tWw_F8SDzKz3-QHaE7?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "Central Hospital is renowned for its state-of-the-art facilities."
    },
    {
      name: "GG Hospital",
      location: "Brodway",
      specialty: "pediatrician,Neurology,Orthipedic",
      image: "https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1670847866380_HospitalProfileImage_1a499074-28fc-4347-a8b8-fc3a3bb30077.png",
      description: "GG Hospital offers comprehensive healthcare services."
    },
    {
      name: "Vijaya Hospital",
      location: "Chennai",
      specialty: "Pediatrician,Dermotology",
      image: "https://th.bing.com/th/id/R.f6e41559824d952f71594f7ffbcdbe3c?rik=4Hr3qhXsNAHdcQ&riu=http%3a%2f%2fvijayahospital.org%2fwp-content%2fuploads%2f2017%2f02%2fIMG_0021.jpg&ehk=WvPXH9S%2fiiYL9ANsAuUT%2fzEE%2fqFxOhy8yVvnvy9AsqI%3d&risl=&pid=ImgRaw&r=0",
      description: "Providing compassionate care in Chennai."
    },
    {
      name: "Parvathy Hospital",
      location: "Chennai",
      specialty: "Cardiology,Neurology",
      image: "https://th.bing.com/th/id/OIP.lD2guSlTILCHoxFz0XWPxgHaE6?w=279&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "Parvathy Hospital specializes in emergency and outpatient care."
    },
    {
      name: "Kavery Hospital",
      location: "Chennai",
      specialty: "Orthopedic,Pediatician",
      image: "https://th.bing.com/th/id/OIP.gZpirvxPVfKdxxYW6yTfhAHaE7?rs=1&pid=ImgDetMain",
      description: "At Kauvery, we propose a more personalised approach to healthcare. We make the most of modern-day medical technology to reach out to patients in a more effective way."
    },
    {
      name: "Balaji Hospital ",
      location: "Chrompet",
      specialty: "Dermotology,Cardiologist",
      image: "https://medicaldialogues.in/h-upload/2021/06/02/155143-sree-balaji-medical-college.jpg",
      description: "Balaji Hospitals is a full-service hospital."
    },
    { 
      name: "PCMC Hospital ",
      location: "Pallavaram",
      specialty: "Neurologist,Orthopedic",
      image: "https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1659696987829_HospitalFacilityImages_7ff9ceb3-1d96-44c5-b143-611ebc28481d.png",
      description: "PCMC give 24 hours services ."
    },
    { 
      name: "Rainbow Childrens Hospital",
      location: "Anna Nagar",
      specialty: "Pediatrician,Dermatology",
      image: "https://www.bing.com/th?id=OLC.YasosgWxZSPBSA480x360&w=278&h=200&c=8&rs=1&qlt=80&p=0&cdv=1&pid=Local",
      description: " Rainbow are multi speciality and super speciality. "
    }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const hospitalLocation = hospital.location ? hospital.location.toLowerCase() : "";
    const hospitalSpecialty = hospital.specialty ? hospital.specialty.toLowerCase() : "";
    return (
      hospitalLocation.includes(location.toLowerCase()) &&
      hospitalSpecialty.includes(specialty.toLowerCase())
    );
  });

  // const handleDetailsClick = (hospitalIndex) => {
  //   const selectedHospital = hospitals[hospitalIndex];
  //   navigate(`/hospital/${hospitalIndex}`, { state: { specialty: selectedHospital.specialty } });
  // };

  return (
    <div className="hospital-head">
      <h4>Find the best hospitals near you.</h4>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onClick={() => setShowLocationOptions(!showLocationOptions)}
        />
        <input
          type="text"
          placeholder="Enter specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
        <button onClick={() => setShowLocationOptions(!showLocationOptions)}>Search</button>
      </div>

      <div className="hospital-list">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div key={index} className="hospital-container">
              <img src={hospital.image} alt={`${hospital.name}`} className="hospital-image" />
              <div className="hospital-details">
                <h3>{hospital.name}</h3>
                <p>Location: {hospital.location}</p>
                <p>Specializations : {hospital.specialty ? hospital.specialty : "No specialties available"}</p>
                <p>Description: {hospital.description}</p>
              </div>
              
            </div>
          ))
        ) : (
          <p>No hospitals found for the selected location and specialty.</p>
        )}
      </div>
    </div>
  );
}

export default Hospital;