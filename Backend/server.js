const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const adminlogin = require('./routes/adminlogin'); 
const appointmentRoutes = require('./routes/appointmentRoutes');

// const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Adjust the origin as needed

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/api/auth', authRoutes);
// app.use('/api', appointmentRoutes);
app.use('/api/admin', adminlogin); 
app.use('/api', appointmentRoutes);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
