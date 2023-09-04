const User = require("../Models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.oneuser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) throw new Error("No User Found");

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      data: err.message,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const uptUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!uptUser) throw new Error("No User found");

    res.status(200).json({
      success: true,
      data: uptUser,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const dltUser = await User.findByIdAndRemove(req.params.foodId);

    if (!dltUser) throw new Error("No User Found");

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
