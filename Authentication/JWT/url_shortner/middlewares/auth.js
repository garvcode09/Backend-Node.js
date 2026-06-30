const express = require("express")
const {handleFindUserByUid} = require("../services/auth.js")
const app = express();

function checkAuth(req, res, next) {
    try {
           const token = req.cookies?.uid;
           console.log("uid",token,"1")
          
           
    if (!token) return res.redirect("/user/login");

    const userId = handleFindUserByUid(token)

    
    if (!userId) return res.redirect("/user/login");

    req.user = userId
    next();
        
    } catch (error) {
        console.log("error at auth middleware",error);
        
    }
 
}

module.exports = checkAuth