const express = require("express")
const router = express.Router();
const User = require("../models/user.js")

router
.route("/signin")
.get((req,res)=>{
    res.render("signin")
})
.post(async (req,res)=>{
    const data = req.body;
    console.log(data);
    if(!data) return res.render("signup")
    const {email,password} = data 
    const user =  await User.matchPassword(email,password)
    console.log("user by login ",user);
    return res.redirect("/home")
    

})

router
.route("/signup")
.get((req,res)=>{
  res.render("signup")
})
.post(async (req,res)=>{
    const user = req.body;
    console.log(user);
    if(!user) return res.render("signup")
    const {username,email,gender,age,password} = user 
    const createdUser = await User.create({username,email,gender,age,password})    
    console.log(createdUser,"createdUser");
    res.render("home")
    
    
})

module.exports = router;