const express = require('express');

const router = express.Router();

// Get all doctors
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific doctor by ID
router.get('/doctors/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new doctor
// router.post('/doctors', async (req, res) => {
//   const { name, specialization, experience } = req.body;
//   try {
//     const newDoctor = new Doctor({ name, specialization, experience });
//     await newDoctor.save();
//     res.status(201).json(newDoctor);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Update a doctor's details
// router.put('/doctors/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, specialization, experience, availability } = req.body;
//   try {
//     const updatedDoctor = await Doctor.findByIdAndUpdate(id, { name, specialization, experience, availability }, { new: true });
//     if (!updatedDoctor) {
//       return res.status(404).json({ message: 'Doctor not found' });
//     }
//     res.status(200).json(updatedDoctor);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Delete a doctor
// router.delete('/doctors/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedDoctor = await Doctor.findByIdAndDelete(id);
//     if (!deletedDoctor) {
//       return res.status(404).json({ message: 'Doctor not found' });
//     }
//     res.status(200).json({ message: 'Doctor deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
