const { User } = require("../models/user.js");

// Get all users
async function handleGetAllUsers(req, res) {
  const users = await User.find({});
  res.json(users);
}

// Create user
async function handleCreateUser(req, res) {
  const { first_name, email } = req.body;

  if (!first_name || !email) {
    return res.status(400).send("Missing fields");
  }

  const user = await User.create({
    name: first_name,
    email,
  });

  res.status(201).json(user);
}

// Get user by id
async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
}

// Delete user by id
async function handleDeleteUserById(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.send("Success");
}

module.exports = {
  handleCreateUser,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
};