import { useState } from "react";
import "./Delivery.css";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart/cart-slice";
const Payment = () => {
  const dispatch = useDispatch();
  const [deliveryData, setDeliveryData] = useState({
    name: "",
    street: "",
    city: "",
    country: "",
    pincode: "",
  });

  const submitDeliverData = (event) => {
    event.preventDefault();
    dispatch(cartActions.deliveryInfo(deliveryData));
  };
  return (
    <>
      <main id="container1">
        <Form id="paymentform" onSubmit={submitDeliverData}>
          <h1>Delivery Address</h1>
          <h5 id="heading">Enter Your Delivery Address:</h5>
          <input
            placeholder="Name"
            required
            id="customer_name"
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, name: e.target.value })
            }
          ></input>
          <br></br>
          <input
            placeholder="House No,Street Name"
            id="street_name"
            required
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, street: e.target.value })
            }
          ></input>
          <br></br>
          <input
            placeholder="City"
            id="city"
            type="text"
            required
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, city: e.target.value })
            }
          ></input>
          <br />
          <input
            placeholder="Country"
            id="country"
            type="text"
            required
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, country: e.target.value })
            }
          ></input>
          <br />
          <input
            placeholder="Pincode"
            id="pincode"
            type=""
            required
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, pincode: e.target.value })
            }
          ></input>
          <button id="paymentbtn">Go To Payment</button>
        </Form>
      </main>
    </>
  );
};
export default Payment;
