const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const connectDb = require("./connection");
const { globalAuth } = require("./middlewares/auth");

const app = express();
const PORT = 4000;

// Connect to database
connectDb("mongodb://localhost:27017/blog-app");

// View engine
app.set("view engine", "ejs");

// Built-in middlewares
app.use(express.static(path.resolve("./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // if you have JSON APIs
app.use(cookieParser());

// Custom global middlewares
app.use(globalAuth);

// Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.use("/user", require("./routes/user.js"));
app.use("/blog", require("./routes/blog.js"));

// 404 handler
app.use((req, res) => {
    res.status(404).render("404");
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render("500");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});