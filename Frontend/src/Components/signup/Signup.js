import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the external CSS file

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5004/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User signup successfully:', data.msg);
        navigate('/login'); // Navigate to the login page
      } else {
        console.error('Signup error:', data.msg);
        alert(data.msg); // Display error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="signuppage">
      <div className="signupcontainer">
        <form onSubmit={handleSubmit} className="form">
          <h1>Signup</h1>
          <input
            type="text"
            name="username"
            placeholder="Username" required
            value={formData.username}
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email" required
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password" required
            value={formData.password}
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password" required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input"
          />

          <button type="submit" className="button">
            Signup
          </button>

          {/* Login link */}
          <p className="text">
            Already have an account?{' '}
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
