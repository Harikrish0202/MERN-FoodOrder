const express = require("express");
const app = express();

const foodRoutes = require("./Routes/fooItemRoutes");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const menuRoutes = require("./Routes/menuRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const userRoutes = require("./Routes/userRoutes");

app.use(express.json());

app.use("/api/v1/eats", foodRoutes);
app.use("/api/v1/eats/stores", restaurantRoutes);
app.use("/api/v1/eats/menus", menuRoutes);
app.use("/api/v1/eats/orders", orderRoutes);
app.use("/api/v1/eats/users", userRoutes);

module.exports = app;
