import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminLogin.css'; // Path to your CSS file

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle login errors
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
        const loginData = { username, password };
        console.log('Sending login data:', loginData);  // Log login data
  
        const response = await fetch('http://localhost:5004/api/admin/adminlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),  // Ensure the data is sent in JSON format
        });
  
        if (!response.ok) {
            const errorData = await response.text(); // Get raw response for debugging
            console.log('Error response:', errorData); // Log the error message
            setError(errorData); // Set the error message
            return;
        }
  
        const data = await response.json();
        
        localStorage.setItem('token', data.token);
        alert(data.message);
        navigate('/adminpanel');
    } catch (error) {
        console.error('Error during login:', error);
        setError('Something went wrong. Please try again.');
    }
  };
  
  return (
    <div className="adminlogin-page">
      <div className="adminlogin-container">
        <div className="adminlogin-box">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="admininput-box">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="admininput-box">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <button type="submit" className="adminlogin-btn">
              Login
            </button>
            {error && <p className="error-message">{error}</p>} {/* Display error */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
