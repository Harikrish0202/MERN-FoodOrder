const express = require("express");
const Router = express.Router();

const foodItemController = require("./../Controllers/foodItemController");

Router.route("/:foodId").get(foodItemController.oneFood);

module.exports = Router;
