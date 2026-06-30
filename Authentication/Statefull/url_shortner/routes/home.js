const express = require("express")
const homeRouter = express.Router()
const {handleHomePage,handleGenerateUrl,handleRedirection} = require("../controller/home.js")


homeRouter
.route("/")
.get(handleHomePage)
.post(handleGenerateUrl)

homeRouter
.route("/:id")
.get(handleRedirection)


module.exports = {homeRouter}