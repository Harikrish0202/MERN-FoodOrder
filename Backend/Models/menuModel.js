const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  menu: [
    {
      category: { type: String },
      items: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "FoodItem",
        },
      ],
    },
  ],
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;