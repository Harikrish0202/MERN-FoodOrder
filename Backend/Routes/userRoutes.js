const express = require("express");
const userController = require("./../Controllers/userController");
const authController = require("./../Controllers/authController");

const Router = express.Router();

// Router.use(authController.isLoggedIn);

Router.post("/signup", authController.signup);
Router.post("/login", authController.login);
Router.get("/logout", authController.logOut);

Router.get("/", userController.getAllUsers);

module.exports = Router;
