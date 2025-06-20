// routes/food.js
const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// Create food item
router.post('/', async (req, res) => {
  try {
    const newItem = new FoodItem(req.body);
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all food items
router.get('/', async (req, res) => {
  try {
    const items = await FoodItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update pickup status or details
router.put('/:id', async (req, res) => {
  try {
    const updated = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete food item
router.delete('/:id', async (req, res) => {
  try {
    await FoodItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
