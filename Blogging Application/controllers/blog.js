function handleBlog(req,res) {
    res.render("blog")
}

function handleBlogCreationPageRender(req,res) {
    res.render("addblog")
}












module.exports = {handleBlog,handleBlogCreationPageRender}