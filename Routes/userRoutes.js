const express = require("express");
const Router = express.Router();

const userController = require("./../Controllers/userController");

Router.get("/", userController.getAllUsers);

module.exports = Router;
