const express = require("express");
const Router = express.Router({ mergeParams: true });

const authController = require("./../Controllers/authController");

const restaurantController = require("./../Controllers/restaurantController");

const menuRoutes = require("./menuRoutes");

Router.route("/:restaurantId/menus").get(menuRoutes);

Router.route("/").get(
  // authController.protect,
  restaurantController.getAllRestaurant
);
// Router.route("/:storeName").get(restaurantController.oneRestaurant);
Router.route("/:restaurantId").get(restaurantController.getByRestaurantId);

module.exports = Router;
