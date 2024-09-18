import React, { useState } from "react";

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    gender: "",
    location: "",
    specialization: "",
    experience: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Apply filters to parent component
  

  return (
    <div className="filters">
      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
        name="gender"
        onChange={handleInputChange}
        value={filters.gender}
      >
        <option value=""> Genders</option>
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
        <option value=""> Locations</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <label htmlFor="specialization">Specialization:</label>
      <select
        id="specialization"
        name="specialization"
        onChange={handleInputChange}
        value={filters.specialization}
      >
        <option value="">Specializations</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Orthopedics">Orthopedics</option>
        <option value="Neurology">Neurology</option>
        <option value="Pediatrics">Pediatrics</option>
        <option value="Dermatology">Dermatology</option>
      </select>

      <label htmlFor="experience">Experience:</label>
      <select
        id="experience"
        name="experience"
        onChange={handleInputChange}
        value={filters.experience}
      >
        <option value=""> Experience</option>
        <option value="1">1 year</option>
        <option value="2">2 years</option>
      </select>

      
    </div>
  );
}

export default Filters;
