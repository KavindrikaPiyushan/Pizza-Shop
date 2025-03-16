const express = require('express');
const {login,refreshToken,register}=require('../controllers/authController');
const router = express.Router();

router.post('/login',login);
router.post('/refresh-token',refreshToken);
router.post('/register',register);

module.exports = router;
