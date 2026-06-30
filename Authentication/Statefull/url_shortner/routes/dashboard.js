const express = require("express")
const dashboardRouter = express.Router()
const {handleDashboard} = require("../controller/dashboard.js")


dashboardRouter
.route("/")
.get(handleDashboard)



module.exports = {dashboardRouter}