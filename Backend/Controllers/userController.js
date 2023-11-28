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

exports.updateMe = (req, res, next) => {
  try {
    if (req.body.password || req.body.passwordConfirm) {
      throw new Error("This is not route for update Passowrd");
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
