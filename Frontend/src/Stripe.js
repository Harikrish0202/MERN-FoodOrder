import React, { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    // Include the delivery address when confirming the payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Selvam", // You can customize this as needed
        },
      },
      shipping: {
        address: {
          //   line1: deliveryAddress.street,
          city: "Nellai",
          state: "TN",
          postal_code: "627358",
        },
      },
    });

    if (result.error) {
      console.error(result.error.message);
      // Handle the error
    } else {
      // Payment was successful
      // Update the order status and notify the user
    }
  };

  return (
    <div>
      <form>
        <CardElement />
        <button onClick={handlePayment}>Pay</button>
      </form>
    </div>
  );
};

// export default PaymentForm;
const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Make a request to your backend to get the clientSecret
    axios
      .post("/create-payment-intent", {
        amountInRupees: 10, // Replace with the actual amount
        currency: "usd", // Replace with your currency
        paymentMethodTypes: ["card"],
      })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <PaymentForm clientSecret={clientSecret} />;
};

export default Checkout;
