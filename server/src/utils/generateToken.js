const jwt = require('jsonwebtoken');
const {JWT_SECRET, JWT_EXPIRATION, REFRESH_TOKEN_EXPIRATION} = require('../config/jwtConfig');

const generateAccessToken = (user)=>{
    return jwt.sign({userId:user.id, role:user.role},JWT_SECRET,{expiresIn:JWT_EXPIRATION});
}

const generateRefreshToken = (user)=>{
   return jwt.sign({userId:user.id, role:user.role},JWT_SECRET,{expiresIn:REFRESH_TOKEN_EXPIRATION});
}

module.exports={generateAccessToken, generateRefreshToken}; 