const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Load environment variables
require('dotenv').config();


// Use the actual MongoDB URI from .env file
const mongoURI = process.env.MONGO_URI;

// const connectDB = require('./config/db');

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(express.json());



// Start Server
const port = process.env.PORT || 5004;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
