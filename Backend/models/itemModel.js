// itemModel.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  imgSrc: String,
  name: String,
  specialization: String,
  rating: Number,
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
