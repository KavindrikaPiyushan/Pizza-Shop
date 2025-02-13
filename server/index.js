// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const pizzaRoutes = require('./routes/PizzaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
mongoose.connect('mongodb+srv://kavin:JlyMr2StjWeN7IjR@cluster0.1wozl.mongodb.net/test_user?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/pizzas', pizzaRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
