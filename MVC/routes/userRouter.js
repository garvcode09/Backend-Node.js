const express = require("express")
const data = require("../MOCK_DATA (1).json")
const router = express.Router();
const fs = require("fs")
const {handleCreateUser,handleDeleteUserById,handleGetAllUsers,handleGetUserById} = require("../controllers/user.js")


// get all users
router
.route("/")
.get(handleGetAllUsers)
.post(handleCreateUser)

// get / patch / delete user by id 

router
.route("/:id")
.get(handleGetUserById)
.delete(handleDeleteUserById)


module.exports = {
    router
}
