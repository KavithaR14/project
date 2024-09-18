// server.js
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const itemController = require('./controllers/itemController');
const itemRouter = require('./routes/itemRoute');
const itemModel = require('./models/itemModel');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', itemRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
