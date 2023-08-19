const express = require("express");
const Router = express.Router();

const restaurantController = require("./../Controllers/restaurantController");

Router.get("/", restaurantController.getAllRestaurant);

module.exports = Router;
