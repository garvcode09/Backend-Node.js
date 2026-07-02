const express = require("express")
const connectDb = require("./connection.js")
const path = require("path")
const app = express();
const PORT = 4000;
//Routes
const userRouter = require("./routes/user.js")


//Database connection
connectDb("mongodb://localhost:27017/blog-app")

// ejs view engine
app.set("view engine","ejs")
app.use(express.static(path.resolve("./public")))
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("home")
})
// Rotues
app.use("/user",userRouter)

app.listen(PORT ,()=>{
    console.log("server is running");
    
})