const fs = require('fs')

function logs(filename) {
    return (req,res,next)=>{
        fs.appendFile(filename,`\n${Date.now()}:${req.method}:${req.path}`,(err,data)=>{
            next()
        })
    }
}

module.exports = {
    logs
}