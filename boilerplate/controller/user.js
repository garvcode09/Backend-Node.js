const { User } = require("../model/user.js");

const {
  handleCreateSession,
  handleFindUserByUid,
} = require("../services/auth.js");

async function handleSignup(req, res) {
  const data = req.body;
  if (data) {
    const { username, email, password } = data;
    const createdUser = await User.create({ username, email, password });
    if (!createdUser) return res.send("user not created");
    const userId = createdUser._id;
    if (!userId) return res.send("user not created");

    const token = handleCreateSession(userId);
    if (token) return res.cookie("uid", token);
    res.cookie("uid", uid, { maxAge: 1000 * 60 * 60 });

    res.redirect("/");
  }
}
async function handleLogin(req, res) {
  const data = req.body;
  if (data) {
    const { identifier, password } = data;
    console.log("username", identifier, "password", password);

    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
      password: password,
    });

    if (!user) return res.redirect("/user/signup");
    const userId = user._id;
    const token = handleCreateSession(userId);
    if (token){res.cookie("uid", token)};
    res.redirect("/");
    
  }
}

function handleSignupPageRender(req, res) {
  res.render("signup");
}
function handleLoginPageRender(req, res) {
  res.render("login");
}

module.exports = {
  handleSignup,
  handleSignupPageRender,
  handleLoginPageRender,
  handleLogin,
};
