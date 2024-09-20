// src/Login.js
import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating a successful login (you can add authentication logic here)
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'user' && password === 'password') {  // Replace with actual authentication check
      // On successful login, navigate to the Appointment page
      navigate('/appointment');
    } else {
      alert('Invalid login credentials');
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p className="login-text">Please fill in your credentials to login</p>
        <form>
          <div className="input-group">
            <label htmlFor="username"></label>
            <input type="text" id="username" name="username" placeholder='username' required />
          </div>
          <div className="input-group">
            <label htmlFor="password"></label>
            <input type="password" id="password" name="password" placeholder='password' required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        {/* Centered 'or' text */}
        <p className="or-text">or</p>

        {/* Sign Up button */}
        <Link to="/signup">
          <button type="submit" className="signup-button">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
