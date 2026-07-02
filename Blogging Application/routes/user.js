const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const {handleSigin,handleSigup,handleSiginPageRender,handleSigupPageRender} = require("../controllers/user.js")
router
  .route("/signin")
  .get(handleSiginPageRender)
  .post(handleSigin);

router
  .route("/signup")
  .get(handleSigupPageRender)
  .post(handleSigup);

module.exports = router;
