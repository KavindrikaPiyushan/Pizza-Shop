// backend/models/pizzaModel.js

const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['vegetarian', 'non-vegetarian'], required: true },
}, { timestamps: true });

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
