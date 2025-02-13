// backend/routes/pizzaRoutes.js

const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/PizzaController');

// Get all pizzas
router.get('/', pizzaController.getAllPizzas);

// Create a new pizza
router.post('/', pizzaController.createPizza);

// Update a pizza by ID
router.put('/:id', pizzaController.updatePizza);

// Delete a pizza by ID
router.delete('/:id', pizzaController.deletePizza);

module.exports = router;
