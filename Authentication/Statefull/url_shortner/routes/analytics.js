const express = require("express")
const analyticsRouter = express.Router()
const {handleAnalytics} = require("../controller/analytics.js")


analyticsRouter
.route("/")
.get(handleAnalytics)



module.exports = {analyticsRouter}