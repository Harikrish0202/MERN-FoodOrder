const mongoose = require("mongoose");
const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter FoodItem name"],
    trim: true,
    maxLength: [100, "FoodItem name cannot exceed 100 characters "],
  },
  description: {
    type: String,
    required: [true, "Please enter FoodItem description"],
  },
  isVeg: Boolean,
  price: {
    type: Number,
    required: [true, "Please enter FoodItem price"],
    maxLength: [5, "FoodItem name cannot exceed 5 characters "],
    default: 0.0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

const FoodItem = mongoose.model("Food", foodItemSchema);
module.exports = FoodItem;
