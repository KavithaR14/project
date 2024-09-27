// /routes/adminRoutes.js
const express = require('express');
const { adminLogin } = require('../controllers/adminController');

const router = express.Router();

// Admin Login Route
router.post('/adminlogin', adminLogin);

module.exports = router;
