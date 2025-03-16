const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/jwtConfig');

const verifyToken = (req,res,next)=>{
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Access Denied. No token Provided.'});
    }
    try {
        const decodedUser = jwt.verify(token,JWT_SECRET);
        req.user = decodedUser;
        next();
    }
    catch(error){
        res.status(400).json({message: 'Invalid Token'});
    }
};

const authorizeRole = (roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message: 'You are not authorized to access this resource'});
        }

        next();
    }
}

module.exports = {verifyToken,authorizeRole};