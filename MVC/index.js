const express  = require("express");
const { connectdb } = require("./database/connectdb.js");
const mongoose = require("mongoose");
const { router:userRouter } = require("./routes/userRouter.js");
const { logs } = require("./middlewares");
const app = express();

// database connenction
connectdb("mongodb://localhost:27017/test-app-1");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(logs("./log.txt"));
app.use(express.json());
// routes

app.use("/api/users", userRouter);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
