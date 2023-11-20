import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import "./Payment.css";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const { isAuthenticated } = useSelector((state) => state.users);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning("You have not logged in yet. Please login to get access");
    }
  }, [isAuthenticated]);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Data we have to pass here.(original data)
    const deliveryDetails = {
      name: "Selvam",
      address: "123 Main St",
      city: "Exampleville",
      postalCode: "12345",
    };
    const fooditems = {
      name: "cappunico",
    };
    const totalAmount = 120;
    // upto this.

    if (!stripe || !elements) {
      console.error("Stripe is not initialized.");
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    try {
      // Create a Payment Intent with Stripe
      const response = await fetch(
        "http://localhost:4000/api/v1/eats/orders/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: totalAmount, // totalAmount we have to set
            currency: "inr",
            paymentMethodTypes: ["card"],
            deliveryDetails,
            fooditems,
          }),
        }
      );

      const data = await response.json();

      // Confirm the Payment Intent using card details
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardNumberElement,
        },

        shipping: {
          name: deliveryDetails.name,
          address: {
            line1: deliveryDetails.address,
            city: deliveryDetails.city,
            postal_code: deliveryDetails.postalCode,
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message);
        // Handle payment error
      } else {
        console.log("Payment was successful");
        navigate("/users/orders");
        // Handle the success scenario
      }
    } catch (error) {
      console.error("Error creating Payment Intent: ", error);
      // Handle the error
    }
  };

  return (
    <>
      <div id="container-pay">
        {isAuthenticated && (
          <form onSubmit={handleSubmit} id="FormElement">
            <h2 className="heading">Enter Your Card Details</h2>

            <div id="card-number-element">
              <label>Card Number</label>
              <CardNumberElement />
            </div>
            <div id="card-expiry-element">
              <label>Card Expiry</label>
              <CardExpiryElement />
            </div>
            <div id="card-cvc-element">
              <label>Card CVC</label>
              <CardCvcElement />
            </div>
            <button type="submit" disabled={!stripe} id="paymentbtncard">
              Pay
            </button>
          </form>
        )}
        {!isAuthenticated && (
          <h4 className="not_login">
            You have not Login yet .Please Login to Get Access
          </h4>
        )}
      </div>
    </>
  );
};

export default PaymentForm;
