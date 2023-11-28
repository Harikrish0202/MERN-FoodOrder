const express = require("express");
const Router = express.Router();

const authController = require("../Controllers/authController");
const orderController = require("../Controllers/orderController");

Router.post("/create-payment-intent", orderController.getCheckout);

Router.post(
  "/createorder",
  authController.protect,
  orderController.createOrder
);
Router.get("/userorder", authController.protect, orderController.getUserOrder);

// Router.get("/getorders", orderController.getAllOrders);
Router.get("/getorder/:orderId", orderController.getOneOrder);
// Router.get("/userorder", authController.protect, orderController.getUserOrder);

// Router.get("/getorder/:orderId", orderController.getOneOrder);
module.exports = Router;
