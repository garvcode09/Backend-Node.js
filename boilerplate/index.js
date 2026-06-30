const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")

const app = express()
const {homeRouter} = require("./routes/home.js")
const {authRouter} = require("./routes/auth.js")

const {connectDb} = require("./connection.js")
const checkAuth = require("./middlewares/auth.js")
const logs = require("./middlewares/log.js")

// Database Connection
connectDb("mongodb://localhost:27017/urlShorter-Project-1")

// middlewares
app.set("view engine", "ejs");
app.set("views",path.resolve("./views"))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve('public')))
app.use(cookieParser())
app.use(logs)


// routes 

app.use("/user",authRouter)
app.use("/",homeRouter)


app.listen(3000,()=>{console.log("server started");
})
