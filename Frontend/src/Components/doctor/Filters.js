import React, { useState } from "react";

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    gender: "",
    location: "",
    specialization: "",
    experience: "",
    hospital: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);  // Notify parent component of filter changes
  };

  return (
    <div className="filters">
      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
        name="gender"
        onChange={handleInputChange}
        value={filters.gender}
      >
        <option value="">Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label htmlFor="location">Location:</label>
      <select
        id="location"
        name="location"
        onChange={handleInputChange}
        value={filters.location}
      >
        <option value="">Locations</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Poonamallee">Poonamallee</option>
        <option value="Mathuraivayil">Mathuraivayil</option>
        <option value="Tambaram">Tambaram</option>
      </select>

      <label htmlFor="specialization">Specialization:</label>
      <select
        id="specialization"
        name="specialization"
        onChange={handleInputChange}
        value={filters.specialization}
      >
        <option value="">Specializations</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Orthopedic">Orthopedic</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Dermatologist">Dermatologist</option>
      </select>

      <label htmlFor="experience">Experience:</label>
      <select
        id="experience"
        name="experience"
        onChange={handleInputChange}
        value={filters.experience}
      >
        <option value="">Experience</option>
        <option value="1">1 year</option>
        <option value="2">2 years</option>
        <option value="3">3 years</option>
        <option value="4">4 years</option>
        <option value="5">5 years</option>
        <option value="6">6 years</option>
        <option value="7">7 years</option>
      </select>

      <label htmlFor="hospital">Hospital:</label>
      <select
        id="hospital"
        name="hospital"
        onChange={handleInputChange}
        value={filters.hospital}
      >
        <option value="Hospitals">Hospitals</option>
        <option value="H Hospital"> H Hospital</option>
        <option value="Parvathy Hospital">Parvathy Hospital</option>
        <option value="PCMC Hospital">PCMC Hospital</option>
        <option value="Vijaya Hospital">vijaya Hospital</option>
        <option value="GG Hospital">GG Hospital</option>
        <option value="Central Hospital ">Central Hospital</option>
        <option value="GG Hospital">GG Hospital</option>
        <option value="Rainbow Hospital ">Rainbow Hospital</option>
        <option value="Kavery Hospital">KaveryHospital</option>

        {/* Add more hospitals as needed */}
      </select>
    </div>
  );
}

export default Filters;
