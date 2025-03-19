const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const {errorHandler} = require('./src/middleware/errorHandler')

const app = express();

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173',  // The URL of your React frontend (update if needed)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,  // Allow cookies (important if you're using JWT in cookies)
  };
  
  // Use CORS middleware with the specified options
  app.use(cors(corsOptions));
  

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);

app.use(errorHandler);

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
