// itemRouter.js
const express = require('express');
const router = express.Router();
const { getItems, addItem } = require('../controllers/itemController');

// Get all items
router.get('/', getItems);

router.post('/', addItem);

module.exports = router;
