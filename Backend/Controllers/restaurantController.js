const Restaurant = require("../Models/restaurantModel");

exports.getAllRestaurant = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({
      data: restaurants,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getByRestaurantId = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurantId);

    if (!restaurant) throw new Error("No restaurant found");

    res.status(200).json({
      success: true,
      data: restaurant,
    });
  } catch (err) {
    res.status(404).json({
      data: err.message,
    });
  }
};

exports.getByRestaurantName = async (req, res, next) => {
  try {
    const restaurantName = req.params.storeName;

    const restaurant = await Restaurant.findOne({ name: restaurantName });

    if (!restaurant) throw new Error("No restaurant found");

    res.status(200).json({
      success: true,
      data: restaurant,
    });
  } catch (err) {
    res.status(404).json({
      data: err.message,
    });
  }
};

exports.updateRestaurant = async (req, res, next) => {
  try {
    const uptRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.foodId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!uptRestaurant) throw new Error("No Restaurant found");

    res.status(200).json({
      success: true,
      data: uptRestaurant,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};

exports.deleteRestaurnat = async (req, res, next) => {
  try {
    const dltRestaurant = await Restaurant.findByIdAndRemove(req.params.foodId);

    if (!dltRestaurant) throw new Error("No Restaurant found");

    res.status(204).json({
      success: true,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};
