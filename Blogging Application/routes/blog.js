const express = require("express")
const router = express.Router()
const {handleBlog,handleBlogCreationPageRender,handleBlogCreation} = require("../controllers/blog.js")
const {upload} = require("../middlewares/multerUpload.js")
router
.route("/:id")
// .get() 

router
.route("/create")
.get(handleBlogCreationPageRender)
.post(upload.single('coverImage'),handleBlogCreation)

module.exports = router;