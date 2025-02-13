// backend/controllers/pizzaController.js

const Pizza = require('../models/PizzaModel');

// Get all pizzas
exports.getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new pizza
exports.createPizza = async (req, res) => {
  const { name, price, image, description, category } = req.body;

  const pizza = new Pizza({
    name,
    price,
    image,
    description,
    category,
  });

  try {
    const newPizza = await pizza.save();
    res.status(201).json(newPizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a pizza
exports.updatePizza = async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) {
      return res.status(404).json({ message: 'Pizza not found' });
    }

    const updatedPizza = await Pizza.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a pizza
exports.deletePizza = async (req, res) => {
  try {
    const pizza = await Pizza.findByIdAndDelete(req.params.id);
    if (!pizza) {
      return res.status(404).json({ message: 'Pizza not found' });
    }
    res.json({ message: 'Pizza deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
