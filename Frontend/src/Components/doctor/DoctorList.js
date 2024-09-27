import React, { useState } from 'react';
import DoctorProfile from './DoctorProfile';
import Filters from "./Filters";
import './Doctor.css';
const doctors = [
  {
    id: 1,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTf3NQbleuH5z7n5rvobNZbWCPzDD9zRFRw&s",
    name: "Dr. Kavitha MBBS;MD",
    specialization: "Cardiologist",
    rating: 4.5,
    location: "Chennai",
    hospital: "H Hospital",
    gender: "Female",
    experience: 5,
  },
  {
    id: 2,
    imgSrc: "https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png",
    name: "Dr. John Doe MBBS;MD",
    specialization: "Cardiologist",
    rating: 4.5,
    location: "Chennai",
    hospital: "Karvery Hospital",
    gender: "Male",
    experience: 3,
  },
  {
    id: 3,
    imgSrc: "https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-indian-doctor-woman-smiling-at-camera-png-image_12531120.png",
    name: "Dr. Sarah Lee MBBS;MD",
    specialization: "Neurologist",
    rating: 4.7,
    location: "Poonamallee",
    hospital: "H Hospital",
    gender: "Female",
    experience: 7,
  },
  {
    id: 4,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72cdwWMAIFkxI40sZ6fKlOePOBSDRfTYoaQ&s",
    name: "Dr. Jeenath MBBS;MD",
    specialization: "Orthopedic",
    rating: 4.6,
    location: "T Nagar",
    hospital: "CentralHospital",
    gender: "Female",
    experience: 8,
  },
  {
    id: 5,
    imgSrc: "https://png.pngtree.com/png-clipart/20230926/ourmid/pngtree-male-physician-doctor-png-image_10167965.png",
    name: "Dr. Emily Clark MBBS;MD",
    specialization: "Pediatrician",
    rating: 4.8,
    location: "Tambaram",
    hospital: "Parvathy Hospital",
    gender: "Male",
    experience: 10,
  },
  {
    id: 6,
    imgSrc: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
    name: "Dr. George White MBBS;MD",
    specialization: "Dermatologist",
    rating: 4.7,
    location: "Maduravayal",
    hospital: "Rainbow Hospital",
    gender: "Male",
    experience: 6,
  },
  {
    id: 7,
    imgSrc: "https://static.vecteezy.com/system/resources/previews/043/413/592/non_2x/doctor-woman-with-stethoscope-keeping-the-arms-crossed-on-isolated-transparent-background-png.png",
    name: "Dr. Vanmathi MBBS;MD",
    specialization: "Neurologist",
    rating: 4.4,
    location: "Chennai",
    hospital: "Balaji  Hospital",
    gender: "Female",
    experience: 9,
  },
  {
    id: 8,
    imgSrc: "https://admin.healuconsultancy.com/uploads/2024/08/17b4dff5cd984e9b6157ba257545e490.png",
    name: "Dr. Samatha Tulla MBBS;MD",
    specialization: "Orthopedic",
    rating: 4.3,
    location: "Tambaram",
    gender: "Female",
    experience: 5,
  },
  {
    id: 9,
    imgSrc: "https://admin.healuconsultancy.com/uploads/2024/08/d2751c5441e97df47c3c7ae0a2506c13.png",
    name: "Dr. Tayana Narendra MBBS;MD",
    specialization: "Pediatrician",
    rating: 4.6,
    location: "Bangalore",
    hospital: "PCMC Hospital",
    gender: "Female",
    experience: 6,
  },
  {
    id: 10,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2yHRmumhuzF3QI33oS_gUYUPywna99hvkQ&",
    name: "Dr. Fenix MBBS;MD",
    specialization: "Dermatologist",
    rating: 4.5,
    location: "Maduravayal",
    hospital: "Kavery Hospital",
    gender: "Male",
    experience: 4,
  },
  {
    id: 11,
    imgSrc: "https://png.pngtree.com/png-clipart/20240220/original/pngtree-portrait-of-a-smiling-handsome-male-doctor-man-png-image_14366794.png",
    name: "Dr. Laura Bennett MBBS;MD",
    specialization: "Cardiologist",
    rating: 4.9,
    location: "Poonamallee",
    hospital: "Central Hospital",
    gender: "Male",
    experience: 12,
  },
  {
    id: 12,
    imgSrc: "https://thumbs.dreamstime.com/b/portrait-confident-african-american-female-doctor-white-backgrou-smiling-31025376.jpg",
    name: "Dr. Pooja MBBS;MD",
    specialization: "Neurologist",
    rating: 4.6,
    location: "T Nagar",
    hospital: "Vijaya Hospital",
    gender: "Female",
    experience: 7,
  },
  {
    id: 13,
    imgSrc: "https://i.pinimg.com/736x/2a/0e/8c/2a0e8cb609405d9ca87bc81154b9c443.jpg",
    name: "Dr. Jessica Brown MBBS;MD",
    specialization: "Orthopedic",
    rating: 4.7,
    location: "Chennai",
    hospital: "Parvathy Hospital",
    gender: "Female",
    experience: 9,
  },
  {
    id: 14,
    imgSrc: "https://static.vecteezy.com/system/resources/previews/046/680/182/non_2x/an-pakistani-male-doctor-on-isolated-transparent-background-png.png",
    name: "Dr. Chris Taylor MBBS;MD",
    specialization: "Pediatrician",
    rating: 4.5,
    location: "Kanchipuram",
    hospital: "Rainbow Hospital",
    gender: "Male",
    experience: 4,
  },
  {
    id: 15,
    imgSrc: "https://t4.ftcdn.net/jpg/03/20/74/45/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg",
    name: "Dr. Jexi MBBS;MD",
    specialization: "Dermatologist",
    rating: 4.4,
    location: "Hyderabad",
    hospital: "Central Hospital",
    gender: "Male",
    experience: 5,
  },
  {
    id: 16,
    imgSrc: "https://www.shutterstock.com/image-photo/portrait-asian-female-doctor-holding-600nw-1901822239.jpg",
    name: "Dr. Nivetha MBBS;MD",
    specialization: "Cardiologist",
    rating: 4.8,
    location: "Chennai",
    hospital: "H Hospital",
    gender: "Female",
    experience: 10,
  },
  {
    id: 17,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIjISwsDTi48GPbsVbRiwUXtcCPgTKyhaGw&s",
    name: "Dr. Emily Ross MBBS;MD",
    specialization: "Neurologist",
    rating: 4.5,
    location: "Bangalore",
    hospital: "GG Hospital",
    gender: "Male",
    experience: 7,
  },
  {
    id: 18,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbcFlS3WAIwm2KuE3ttO8mn6vtwavlO4cuQ&s",
    name: "Dr. Alex Carter MBBS;MD",
    specialization: "Orthopedic",
    rating: 4.6,
    location: "Kanchipuram",
    hospital: "Rainbow Hospital",
    gender: "Male",
    experience: 8,
  },
  {
    id: 19,
    imgSrc: "https://www.transparentpng.com/download/doctor/male-intern-doctor-png-free-in-blue-clothes-eiDunD.png",
    name: "Dr. Olivia King MBBS;MD",
    specialization: "Pediatrician",
    rating: 4.7,
    location: "Thiruvallur",
    hospital: "H Hospital",
    gender: "Male",
    experience: 6,
  },
  {
    id: 20,
    imgSrc: "https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526857009zrma0.png",
    name: "Dr. Linda Young MBBS;MD",
    specialization: "Dermatologist",
    rating: 4.9,
    location: "T Nagar",
    hospital: "Apollo Hospital",
    gender: "Male",
    experience: 10,
  },
];



function DoctorList() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleFilterChange = (filters) => {
    const filtered = doctors.filter((doctor) => {
      return (
        (!filters.gender || doctor.gender === filters.gender) &&
        (!filters.location || doctor.location === filters.location) &&
        (!filters.specialization || doctor.specialization === filters.specialization) &&
        (!filters.experience || doctor.experience.toString() === filters.experience) &&
        (!filters.hospital || doctor.hospital === filters.hospital)
      );
    });
    setFilteredDoctors(filtered);
  };

  return (
    <>
      <Filters onFilterChange={handleFilterChange} />
      <div className="doctor-profiles">
        {filteredDoctors.map((doctor, index) => (
          <DoctorProfile key={index} doctor={doctor} />
        ))}
      </div>
    </>
  );
}

export default DoctorList;