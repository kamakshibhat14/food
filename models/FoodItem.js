// models/FoodItem.js
const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  pickedUp: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('FoodItem', FoodItemSchema);
