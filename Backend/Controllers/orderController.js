const stripe = require("stripe")(
  "sk_test_51Nu7qvSALNch1MIsRMTvcFaaKfLkXZNvsbJ6jAgD40mf3t2u0e59FiWm9OjQ2d6dYg1tMWjnyOetyNIs4vXsuCYV00qJFAE1Bf"
);
const Food = require("../Models/fooditemModel");

exports.getCheckout = async (req, res, next) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100, // Amount in rupees
      currency: "inr",
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
