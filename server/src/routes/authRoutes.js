const express = require('express');
const {login,refreshToken,register,logout}=require('../controllers/authController');
const router = express.Router();

router.post('/login',login);
router.post('/refresh-token',refreshToken);
router.post('/register',register);
router.post('/logout',logout);

module.exports = router;
