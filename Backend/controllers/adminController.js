// /controllers/adminController.js
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Admin login function
exports.adminLogin = async (req, res) => {
    const { username, password } = req.body;
  
    // console.log('Received username:', username); // Log received username
    // console.log('Received password:', password); // Log received password
  
    try {
      if (username === 'kavitha' && password === 'kavitha12@R') {
        const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
        return res.status(200).json({
          message: 'Login successful',
          token,
        });
      } else {
        return res.status(400).json({ 
            message: 'Invalid username or password',
            token,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
         message: 'Server error' ,
        });
    }
  };
  