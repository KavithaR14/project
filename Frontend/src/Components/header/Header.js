import React from 'react';
import './Header.css';
import CuraSlotlogo from './CuraSlotlogo.png'; // Ensure the correct path to your image file
import { Link, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory

const Header = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleAdminPanelClick = () => {
    navigate('/adminlogin'); // Navigate to the admin login page when clicked
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img src={CuraSlotlogo} alt="healthcare logo" />
          <span></span>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/hospital">Hospital</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              {/* Programmatic navigation using button */}
              <button onClick={handleAdminPanelClick} className="admin-panel-btn">
                Admin Panel
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/login">Login/Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
