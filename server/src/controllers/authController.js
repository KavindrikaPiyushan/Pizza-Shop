const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const {JWT_SECRET, JWT_EXPIRATION, REFRESH_TOKEN_EXPIRATION} = require('../config/jwtConfig');
const {generateAccessToken, generateRefreshToken} = require('../utils/generateToken');

const login = async ( req,res) =>{
  const {email,password} = req.body; 
  const user = await User.findByEmail(email);
   if(!user){
        return res.status(401).json({message: 'Invalid User Credentials'});
   }
   const isPasswordValid = await bcrypt.compare(password,user.password);
   if(!isPasswordValid){
       return res.status(401).json({message: 'Invalid User Credentials'});
   }

   const accessToken = generateAccessToken(user);
   const refreshToken = generateRefreshToken(user);

   await User.updateRefreshToken(user.id, refreshToken);

   res.cookie("refreshToken", refreshToken, {httpOnly:true,secure:true,maxAge:7 * 24 * 60 * 60 * 1000 });
   res.json({AccessToken:accessToken});

};

const refreshToken = async (req,res)=>{
    const {refreshToken} = req.cookies;
    if (!refreshToken){
        return res.status(401).json({message: 'Refresh Token is not provided'});
    }

    const user = await User.findByEmail(email);
    if (!user || user.refreshToken !== refreshToken){
        return res.status(401).json({message: 'Invalid Refresh Token'});

    }
    const newAccessToken = generateAccessToken(user);
    res.json({accessToken:newAccessToken});
}

const register = async (req,res)=>{
    const {email, password,role} = req.body;

    try {
        const existingUser = await User.findByEmail(email);
        if(existingUser){
            return res.status(400).json({message: ' User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const userId = await User.create(email,hashedPassword,role);
        
        res.status(201).json({message:"User Registered Successfully!"});

    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

module.exports = {login, refreshToken,register};