const express = require("express")
const {handleSignup,handleSignupPageRender,handleLoginPageRender,handleLogin} = require("../controller/user.js")

const authRouter = express.Router()

authRouter
.route("/signup")
.get(handleSignupPageRender)
.post(handleSignup)

authRouter
.route("/login")
.get(handleLoginPageRender)
.post(handleLogin)
module.exports = { authRouter}

