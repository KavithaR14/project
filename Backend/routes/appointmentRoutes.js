const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Route to handle appointment creation (POST)
router.post('/appointments', appointmentController.createAppointment);

module.exports = router;
