import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="navbar">
        <h1 className="navbar-title">Healthcare Appointment System</h1>
        <nav className="navbar-nav">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/doctor" className="nav-button">Doctor</Link>
          <Link to="/hospital" className="nav-button">Hospital</Link>
        </nav>
      </header>

      <section className="main-content">
        <h2>Welcome to Our Healthcare Appointment System</h2>
        <p>Book appointments with doctors or hospitals at your convenience.</p>
      </section>

      <footer className="footer">
        <p>© 2024 Healthcare Appointment System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
