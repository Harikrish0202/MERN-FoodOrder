const express = require("express");
const Router = express.Router({ mergeParams: true });

const menuController = require("./../Controllers/menuController");

Router.route("/").get(menuController.getAllMenu);

module.exports = Router;
