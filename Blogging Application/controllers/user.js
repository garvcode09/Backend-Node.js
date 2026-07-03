const User = require("../models/user.js");
const { generateToken, validateToken } = require("../services/auth.js");

async function handleSigin(req, res) {
  const data = req.body;
  const { email, password } = data;
  if (!email || !password) {
    return res
      .status(400)
      .render("signin", { error: "Email and Password Reruired" });
  }
  try {
    const user = await User.matchPassword(email, password);
    const token = generateToken(user);
    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      })
      .redirect("/");
  } catch (err) {
    return res
      .status(401)
      .render("signin", { error: "Invalid email or password" });
  }
}

async function handleSigup(req, res) {
  const user = req.body;
  
  const { username, email, gender, age, password } = user;
  console.log(user)
  if (!username || !email || !gender || !age || !password) {
    console.log("all field requierd error");
    
    return res
      .status(400)
      .render("signup", { error: "All fields are Required" });
  }

  try {
      const createdUser = await User.create({
      username,
      email,
      gender,
      age,
      password,
    });
    
    const token = generateToken(createdUser);
    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      })
      .redirect("/");
  } catch (err) {
    console.log("error trycatch signup",err);
    
    return res
      .status(401)
      .render("signup", { error: "Invalid email or password" });
  }
}

function handleSigupPageRender(req, res) {
  res.render("signup");
}

function handleSiginPageRender(req, res) {
  res.render("signin");
}

function handleLogout(req,res) {
  res.clearCookie("token").redirect("/")
  
}

module.exports = {
  handleSigin,
  handleSigup,
  handleSiginPageRender,
  handleSigupPageRender,
};
