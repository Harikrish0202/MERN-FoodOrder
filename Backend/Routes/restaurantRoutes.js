const express = require("express");
const Router = express.Router();

const restaurantController = require("./../Controllers/restaurantController");

Router.route("/").get(restaurantController.getAllRestaurant);
Router.route("/:name").get(restaurantController.oneRestaurant);

module.exports = Router;
