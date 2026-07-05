const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
    {
        coverImage:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        body:{
            type:String,
            required:true,
        },
       createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
       }


}, { timestamps: true });

const Blog = mongoose.model("blog",blogSchema)

module.exports = Blog;