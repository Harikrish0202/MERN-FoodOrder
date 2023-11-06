const express = require("express");
const Router = express.Router();

const authController = require("../Controllers/authController");
const orderController = require("../Controllers/orderController");

Router.post("/create-payment-intent", orderController.getCheckout);

module.exports = Router;
