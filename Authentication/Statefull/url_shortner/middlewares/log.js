const fs = require("fs")
const path = require('path')

function logs(req,res,next) {
     const logPath = path.join(__dirname, "../logs.txt");

     
    fs.appendFile(logPath,`\n url: ${req.originalUrl} path:${req.path}`,"utf-8",()=>{})
    console.log("middleware hit");
    
    next()
}

module.exports = logs