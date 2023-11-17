const stripe = require("stripe")(
  "sk_test_51Nu7qvSALNch1MIsRMTvcFaaKfLkXZNvsbJ6jAgD40mf3t2u0e59FiWm9OjQ2d6dYg1tMWjnyOetyNIs4vXsuCYV00qJFAE1Bf"
);
const Food = require("../Models/fooditemModel");

exports.getCheckout = async (req, res, next) => {
  const { amount, currency, paymentMethodTypes, deliveryDetails, fooditems } =
    req.body;
  console.log(deliveryDetails);
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

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};
