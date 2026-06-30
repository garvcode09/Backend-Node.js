const { User } = require("../model/user.js");
const { v4: uidv4 } = require("uuid");
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
    const uid = uidv4();
    handleCreateSession(uid, createdUser);
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
    const uid = uidv4();
    handleCreateSession(uid, user);
    res.cookie("uid", uid, { maxAge: 1000 * 60 * 60 });
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
