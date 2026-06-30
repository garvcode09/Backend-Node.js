const mongoose = require("mongoose");

async function connectdb(url) {
    await mongoose.connect(url)
.then((data)=>console.log("mongodb connected"))
.catch(()=>{console.log("database connection failed");
})
}
module.exports = { connectdb };



