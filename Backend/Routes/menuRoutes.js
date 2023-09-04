const express = require("express");
const Router = express.Router();

const menuController = require("./../Controllers/menuController");

Router.get("/", menuController.getAllMenu);

module.exports = Router;
