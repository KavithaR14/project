const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  symptoms: { type: String, required: true },
  specialist: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  medications: { type: Boolean, required: true },
  medicationList: { type: String, default: '' },
  doctorId: { type: String, required: true },  // Store doctor ID
}, {
  timestamps: true,  // This will add createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Appointment', appointmentSchema);
