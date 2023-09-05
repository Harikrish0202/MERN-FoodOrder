const Food = require("../Models/fooditemModel");

exports.getAllFood = async (req, res, next) => {
  try {
    const foods = await Food.find();
    res.status(200).json({
      success: true,
      data: foods,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFood = async (req, res, next) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json({
      success: true,
      data: food,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.oneFood = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.foodId);

    if (!food) throw new Error("No food found");

    res.status(200).json({
      success: true,
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};

exports.updateFood = async (req, res, next) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.foodId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!food) throw new Error("No food found");

    res.status(200).json({
      success: true,
      data: food,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};

exports.deleteFood = async (req, res, next) => {
  try {
    const food = await Food.findByIdAndRemove(req.params.foodId);

    if (!food) throw new Error("No food found");

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

///hi hello
