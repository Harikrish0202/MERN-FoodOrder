import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { createOrders } from "../../../store/orders/order-action";
import Spinner from "../../Home/Loader";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const { items, deliveryInfo, paymentInfo } = useSelector(
    (state) => state.cart
  );

  const { isAuthenticated, user, loading } = useSelector(
    (state) => state.users
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning("You have not loged yet. Please login to get access");
    }
  }, [isAuthenticated]);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    document.querySelector("#paymentbtncard").disabled = true;

    // Data we have to pass here.(original data)
    const deliveryDetails = deliveryInfo;

    const fooditems = "fooditems";

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
            line1: deliveryDetails.street,
            city: deliveryDetails.city,
            postal_code: deliveryDetails.pinCode,
          },
        },
      });
      const order = {
        orderItems: items,
        deliveryInfo: {
          name: deliveryInfo.name,
          address: deliveryInfo.street,
          city: deliveryInfo.city,
          phoneno: deliveryInfo.phone,
          pincode: deliveryInfo.pincode,
          country: deliveryInfo.country,
        },
        user: user._id,
        restaurant: items.map((item) => item.restaurantId),
        paymentInfo,
        paymentId: result.paymentIntent.id,
        orderStatus: result.paymentIntent.status,
      };

      console.log(order);

      if (result.error) {
        toast.error(result.error.message);
        // Handle payment error
      } else {
        console.log("Payment was successful");
        dispatch(createOrders(order));
        navigate("/confirmorder");
        // Handle the success scenario
      }
    } catch (error) {
      console.error("Error creating Payment Intent: ", error);
      // Handle the error
    }
  };

  return (
    <>
      {loading && <Spinner message="Loading" />}
      {items.length === 0 && !loading && (
        <h3 style={{ textAlign: "center", color: "white" }}>
          You can't make payment!.Because your cart is Empty
        </h3>
      )}

      {isAuthenticated && items.length > 0 && (
        <div id="container-pay">
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
        </div>
      )}
      {!isAuthenticated && !loading && (
        <h4 className="not_login">
          You have not Login yet .Please Login to Get Access
        </h4>
      )}
    </>
  );
};

export default PaymentForm;
