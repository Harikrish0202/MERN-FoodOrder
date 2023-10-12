const express = require("express");
const Router = express.Router({ mergeParams: true });

const menuController = require("./../Controllers/menuController");

Router.route("/:id/menus").get(menuController.getMenu);

module.exports = Router;
