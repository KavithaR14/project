import React from 'react';
import './Header.css';
import CuraSlotlogo from './CuraSlotlogo.png'; // Ensure the correct path to your image file
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img src={CuraSlotlogo} alt="healthcare logo" />
          <span></span>
        </div>
        <nav className="nav-links">
          <ul>
            <li>< Link to ="/">Home</Link></li>
            <li>< Link to ="/doctors">Doctors</Link></li>
            <li>< Link to ="/hospital">Hospital</Link></li>
            <li>< Link to ="/about">About</Link></li>
            <li>< Link to ="/contact">Contact</Link></li>
            <li><button className="admin-panel-btn">Admin Panel</button></li>
          </ul>
        </nav>
      </div>      
        <nav className="nav-links">
          <ul>
            <li>< Link to ="/login">Login/Signup</Link></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
