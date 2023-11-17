const Order = require("../Models/orderModel");
const stripe = require("stripe")(
  "sk_test_51Nu7qvSALNch1MIsRMTvcFaaKfLkXZNvsbJ6jAgD40mf3t2u0e59FiWm9OjQ2d6dYg1tMWjnyOetyNIs4vXsuCYV00qJFAE1Bf"
);

// For Payment.
exports.getCheckout = async (req, res, next) => {
  const { amount, currency, paymentMethodTypes, deliveryDetails, fooditems } =
    req.body;

  console.log("Received amount:", amount, "Currency:", currency);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert amount to paise(Because Stripe expects amount to be in smallest currency unit(inr->paise))
      currency: currency || "inr", // By default we setting (currency unit)
      payment_method_types: paymentMethodTypes,
      description: "Payment for testing",
      metadata: {
        foodItems: JSON.stringify(fooditems), //Fooditem Details
      },
    });

    // const order = await Order.create({
    //   deliveryInfo: deliveryDetails,
    //   restaurant: req.restaurant,
    //   user: req.user,
    //   orderItems: fooditems,
    //   paymentInfo: {
    //     id: paymentIntent.id,
    //     status: paymentIntent.status,
    //   },
    //   paidAt: new Date(),
    //   itemsPrice: amount,
    // });

    res.json({
      clientSecret: paymentIntent.client_secret,
      message: "Payment intent created successfully.",
      // orderId: order._id,
      // message: "Payment intent and order created successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

// For Order Creating.
exports.createOrder = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        status: "fail",
        error: "You are not logged in! Please login to get access for orders.",
      });
    }
    const {
      deliveryInfo,
      restaurant,
      orderItems,
      paymentInfo,
      paidAt,
      itemsPrice,
      taxPrice,
      deliveryCharge,
      totalPrice,
      orderStatus,
    } = req.body;

    const newOrder = await Order.create({
      deliveryInfo,
      restaurant,
      user: req.user._id,
      orderItems,
      paymentInfo,
      paidAt,
      itemsPrice,
      taxPrice,
      deliveryCharge,
      totalPrice,
      orderStatus,
    });

    res.status(201).json({
      status: "success",
      data: {
        order: newOrder,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//For getting all Order details.
exports.getAllOrders = async (req, res, next) => {};
