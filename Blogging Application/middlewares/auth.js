const { validateToken } = require("../services/auth.js")


function globalAuth(req, res, next) {
  const token = req.cookies?.token;
  if(!token) {
    req.user = null;
    return next()
  }
 try {
    const payload = validateToken(token);
    req.user = payload
 } catch (error) {
       req.user = null;    
 }
 next();
}
