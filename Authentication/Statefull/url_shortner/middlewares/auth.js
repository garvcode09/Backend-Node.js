const express = require("express")
const {handleFindUserByUid} = require("../services/auth.js")
const app = express();

function checkAuth(req, res, next) {
    try {
           const uid = req.cookies?.uid;
           console.log(req.cookies);
           
                console.log("uid",uid)
    if (!uid) return res.redirect("/user/login");

    const user = handleFindUserByUid(uid)

    
    if (!user) return res.redirect("/user/login");

    req.user = user?._id;
    next();
        
    } catch (error) {
        console.log("error at auth middleware");
        
    }
 
}

module.exports = checkAuth