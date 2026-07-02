const jwt = require('jsonwebtoken');
const secretKey  = "garv0900"

function generateToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        };
    const token = jwt.sign(payload,secretKey)
    return token
}

function validateToken(token) {
    const payload = jwt.verify(token,secretKey)
    return payload;

}

module.exports = {
    generateToken,validateToken
}