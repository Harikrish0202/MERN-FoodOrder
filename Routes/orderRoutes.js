const express = require("express");
const Router = express.Router();

const orderController = require("./../Controllers/orderController");

Router.get("/", orderController.getAllOrder);

module.exports = Router;
