const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const imgRoutes = require('./src/routes/imgRoutes');
const {errorHandler} = require('./src/middleware/errorHandler')
const cloudinary = require('cloudinary').v2;


const app = express();

cloudinary.config({
  cloud_name: 'dvt5ubo1q',
  api_key: '892265382541189',
  api_secret: 'mMqYtTEHETnpWePviobrjKK0bkA',
});


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
app.use('/api/images',imgRoutes );



app.use(errorHandler);

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
