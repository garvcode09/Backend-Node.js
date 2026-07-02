const mongoose = require("mongoose")

function connectDb(url) {
    try {
        mongoose.connect(url)
        .then(()=>{console.log("database connected");
        })
        .catch(()=>{console.log("database is't connected");
        })
    } catch (error) {
        console.log("Error in database connection");
        
    }
}

module.exports = connectDb