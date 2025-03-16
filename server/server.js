const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./src/routes/authRoutes');
const {errorHandler} = require('./src/middleware/errorHandler')

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);

app.use(errorHandler);

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
