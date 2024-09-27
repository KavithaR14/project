const User = require('../models/user'); // Adjust the path as needed
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email or username already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User with this email already exists' });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ msg: 'Username already taken' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Send token to the client
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};
