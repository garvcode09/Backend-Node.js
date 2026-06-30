const jwt = require("jsonwebtoken");
const secretkey = "garv23"; // testing

function handleCreateSession(Id) {
console.log(Id);

  try {
    return jwt.sign(
      {
        uid:Id,
      },
      secretkey,
    );
  } catch (error) {
    console.log("error in auth service",error);
  }
}

function handleFindUserByUid(token) {
  try {
    const {uid:userId} = jwt.verify(token, secretkey);
    return userId;
  } catch (error) {
    console.log("error at auth service finduser method", error);
  }
}

module.exports = {
  handleCreateSession,
  handleFindUserByUid,
};
