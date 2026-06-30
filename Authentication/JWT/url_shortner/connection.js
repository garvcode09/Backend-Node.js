const mongoose = require("mongoose");


  function connectDb(Url) {
    mongoose
      .connect(Url)
      .then(() => {
        console.log("Database Connected");
      })
      .catch((err) => {
        console.log("connection failed",err);
      });
  }

module.exports = {connectDb}