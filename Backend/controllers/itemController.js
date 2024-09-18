// itemController.js
const itemModel = require('../models/itemModel');
// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new item
const addItem = async (req, res) => {
  const { imgSrc, name, specialization, rating } = req.body;

  try {
    const newItem = new Item({ imgSrc, name, specialization, rating });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = {
  getItems,
  addItem,
};
