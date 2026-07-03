const express = require("express")
const router = express.Router()
const {handleBlog,handleBlogCreationPageRender} = require("../controllers/blog.js")

router
.route("/:id")
// .get() 

router
.route("/create")
.get(handleBlogCreationPageRender)
// .post(handleBlogCreation)

module.exports = router;