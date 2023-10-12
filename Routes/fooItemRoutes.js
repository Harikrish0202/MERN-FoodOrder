const express = require("express");
const Router = express.Router();

const foodItemController = require("./../Controllers/foodItemController");

Router.route("/")
  .get(foodItemController.getAllFood)
  .post(foodItemController.createFood);
Router.route("/")
  .get(foodItemController.oneFood)
  .patch(foodItemController.updateFood)
  .delete(foodItemController.deleteFood);

module.exports = Router;
