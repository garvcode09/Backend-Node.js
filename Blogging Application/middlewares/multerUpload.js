const multer = require("multer");
const path = require("path");
const crypto = require("crypto")

const storage = multer.diskStorage({
    destination : path.resolve("public/uploads"),
    filename:function (req,file,cb){
        const ext =  path.extname(file.originalname);
        const uniqueName = `${Date.now()}-${crypto.randomUUID()}${ext}`
        cb(null,uniqueName)
    }
})
const fileFiltering = (req,file,cb)=>{
    const allowedTypes = ['image/jpeg','image/png','image/webp']
    if(allowedTypes.includes(file.mimetype.toLowerCase())){
        cb(null,true);
    }else{
        cb(new Error('Only JPEG PNG AND WEBP images are allowed'),false)
    }
}
const limits ={
    fileSize:10*1024*1024,
    files:1,
}

const upload = multer(
    {
        storage:storage,
        fileFilter:fileFiltering,
        limits:limits,
    }
);

module.exports = {upload}