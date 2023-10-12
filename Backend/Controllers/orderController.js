const Order = require("../Models/orderModel");

exports.getAllOrder = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.oneOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId);

    if (!order) throw new Error("No Order Found!");

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const uptOrder = await Food.findByIdAndUpdate(
      req.params.orderId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!uptOrder) throw new Error("No Order found");

    res.status(200).json({
      success: true,
      data: uptOrder,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const dltOrder = await Menu.findByIdAndRemove(req.params.orderId);

    if (!dltOrder) throw new Error("No Order Found");

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
