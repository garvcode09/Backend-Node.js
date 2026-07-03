const { validateToken } = require("../services/auth.js");

function globalAuth(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    req.user = null;
    req.authState = "missing";
    return next();
  }
  try {
    const payload = validateToken(token);
    req.user = payload;
  } catch (error) {
    req.user = null;
    req.authState = 'invalid'
  }
  res.locals.user = JSON.stringify(req.user)
  next();
}

function requireAuth(req, res, next) {
  
  if(req.user){
   return  next()
  }
if(req.authState ==  "invalid"){
  return res.redirect("/user/signin")
}
return res.redirect("/user/signup")
}

module.exports = { globalAuth };
