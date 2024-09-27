const Appointment = require('../models/Appointment');

// Controller to create an appointment
exports.createAppointment = async (req, res) => {
  const {
    patientName,
    phoneNumber,
    email,
    age,
    gender,
    address,
    symptoms,
    specialist,
    appointmentDate,
    appointmentTime,
    medications,
    medicationList,
    doctorId,
  } = req.body;

  try {
    // Create a new appointment
    const newAppointment = new Appointment({
      patientName,
      phoneNumber,
      email,
      age,
      gender,
      address,
      symptoms,
      specialist,
      appointmentDate,
      appointmentTime,
      medications,
      medicationList,
      doctorId,
    });

    // Save the appointment in the database
    await newAppointment.save();

    return res.status(201).json({
      message: 'Appointment created successfully',
      appointment: newAppointment,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({
      message: 'Failed to create appointment',
    });
  }
};
