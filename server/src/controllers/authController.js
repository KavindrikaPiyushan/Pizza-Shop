const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const {JWT_SECRET, JWT_EXPIRATION, REFRESH_TOKEN_EXPIRATION} = require('../config/jwtConfig');
const {generateAccessToken, generateRefreshToken} = require('../utils/generateToken');

const login = async ( req,res) =>{
    try{
        const {email,password} = req.body; 
        
        if(!email || !password){
            return res.status(400).json({message:'Email and password are required'});
        }
      
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
         res.json({AccessToken:accessToken,role: user.role});
    }catch(error){

        console.error('Login error',error);

        if (error.name === 'DatabaseError') {
            return res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
          }
      
          // Catch unexpected errors
          return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
        }

    


};

const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(401).json({ message: 'Refresh Token is not provided' });
        }

        let decoded;
        try {
            decoded = jwt.verify(refreshToken, JWT_SECRET);
          
        } catch (error) {
           
            return res.status(403).json({ message: "Invalid Refresh Token" });
        }

     
        if (!decoded.email) {
           
            return res.status(400).json({ message: "Invalid Token Data" });
        }

        const user = await User.findByEmail(decoded.email);

      
        if (!user || user.refresh_token !== refreshToken) {
            return res.status(401).json({ message: 'Invalid Refresh Token' });
        }

        const newAccessToken = generateAccessToken(user);
        res.json({ accessToken: newAccessToken });

    } catch (error) {
        console.error("Refresh token error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const register = async (req,res)=>{
    const {name,email, password,role} = req.body;

    try {
        const existingUser = await User.findByEmail(email);
        if(existingUser){
            return res.status(400).json({message: ' User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const userId = await User.create(name,email,hashedPassword,role);
        
        res.status(201).json({message:"User Registered Successfully!"});

    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

const logout = async (req,res)=>{
    res.clearCookie("refreshToken");
    res.json({message:"Logged out successfully"});
}

module.exports = {login, refreshToken,register,logout};