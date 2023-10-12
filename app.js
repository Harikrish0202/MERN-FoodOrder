const express = require("express");
const cors = require("cors");
const app = express();

const foodRoutes = require("./Routes/fooItemRoutes");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const menuRoutes = require("./Routes/menuRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const userRoutes = require("./Routes/userRoutes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    // origin: "http://localhost:3001", // Allow requests from this origin
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
    // credentials: true, // Include credentials (cookies, HTTP authentication) in the request
  })
);
app.use(express.json()); // Body parser, reading data from body into req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // Cookie parser, parses data from cookies.

// app.use((req, res, next) => {
//   if (req.get("Content-Type") === "application/json") {
//     console.log("tes");
//   } else {
//     console.log("NO");
//   }

//   next();
// });
app.use("/api/v1/eats", foodRoutes);
app.use("/api/v1/eats/stores", restaurantRoutes);
app.use("/api/v1/eats/stores", menuRoutes);
app.use("/api/v1/eats/orders", orderRoutes);
app.use("/api/v1/eats/users", userRoutes);

module.exports = app;
