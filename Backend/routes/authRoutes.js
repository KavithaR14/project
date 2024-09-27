const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/signup',registerUser);
router.post('/login',loginUser);
module.exports = router

