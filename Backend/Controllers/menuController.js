const Menu = require("../Models/menuModel");

// exports.getAllMenu = async (req, res, next) => {
//   try {
//     const menus = await Menu.find();
//     res.status(200).json({
//       success: true,
//       data: menus,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getMenu = async (req, res, next) => {
  try {
    const menu = await Menu.findOne({ restaurant: req.params.id }).populate(
      "menu.items"
    );
    if (!menu) throw new Error("No Menu Found");

    res.status(200).json({
      success: true,
      menu,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};

exports.updateMenu = async (req, res, next) => {
  try {
    const uptFood = await Food.findByIdAndUpdate(req.params.foodId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!uptFood) throw new Error("No Menu found");

    res.status(200).json({
      success: true,
      data: uptFood,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      data: err.message,
    });
  }
};

exports.deleteMenu = async (req, res, next) => {
  try {
    const dltMenu = await Menu.findByIdAndRemove(req.params.foodId);

    if (!dltMenu) throw new Error("No Menu Found");

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
