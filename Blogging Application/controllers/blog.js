function handleBlog(req,res) {
    res.render("blog")
}

function handleBlogCreationPageRender(req,res) {
    res.render("addblog")
}


function handleBlogCreation(req,res) {
    console.log("reqObject",req);
    
    console.log("coverImage from create post",req.file);
    console.log("textfileds from create post",req.body);

    
}









module.exports = {handleBlog,handleBlogCreationPageRender,handleBlogCreation}