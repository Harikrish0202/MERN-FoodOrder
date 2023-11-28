const express = require("express");
const userController = require("./../Controllers/userController");
const authController = require("./../Controllers/authController");

const Router = express.Router();

Router.post("/signup", authController.signup);
Router.post("/login", authController.login);
Router.post("/forgotPassword", authController.forgotPassword);
Router.patch("/resetPassword/:token", authController.resetPassword);
Router.get("/logout", authController.logOut);
Router.get("/me", authController.protect, authController.getUserLogins);
Router.patch("/updateMe", authController.protect, userController.updateMe);
module.exports = Router;
