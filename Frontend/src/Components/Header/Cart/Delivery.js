import { useState } from "react";
import "./Delivery.css";
import { Form, useNavigate } from "react-router-dom";
import { countries } from "countries-list";
import { useDispatch, useSelector } from "react-redux";
import { saveDeliveryInfo } from "../../../store/cart/cart-action";
const Payment = () => {
  const { deliveryInfo, items } = useSelector((state) => state.cart);
  const countriesList = Object.values(countries);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deliveryData, setDeliveryData] = useState({
    name: deliveryInfo.name,
    phone: deliveryInfo.phone,
    street: deliveryInfo.street,
    city: deliveryInfo.city,
    country: deliveryInfo.country,
    pincode: deliveryInfo.pincode,
  });

  const submitDeliveryData = (event) => {
    event.preventDefault();
    dispatch(saveDeliveryInfo(deliveryData));
    navigate("/delivery/deliverydetails");
  };
  return (
    <>
      <main id="container1">
        {items.length === 0 && (
          <h3 style={{ textAlign: "center", color: "white" }}>
            You must should be fooditems
          </h3>
        )}
        {items.length > 0 && (
          <Form id="paymentform" onSubmit={submitDeliveryData}>
            <h1>Delivery Address</h1>
            <h5 id="heading">Enter Your Delivery Address:</h5>
            <input
              placeholder="Name"
              required
              id="customer_name"
              value={deliveryData.name}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, name: e.target.value })
              }
            ></input>
            <input
              placeholder="Phone Number"
              id="phone_number"
              type="tel"
              value={deliveryData.phone}
              required
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, phone: e.target.value })
              }
            ></input>
            <br></br>
            <input
              placeholder="House No,Street Name"
              id="street_name"
              required
              value={deliveryData.street}
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
              value={deliveryData.city}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, city: e.target.value })
              }
            ></input>
            <br />

            <select
              id="country"
              placeholder="Country"
              value={deliveryData.country}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, country: e.target.value })
              }
              required
            >
              {countriesList.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <br />
            <input
              placeholder="Pincode"
              id="pincode"
              type="number"
              required
              value={deliveryData.pincode}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, pincode: e.target.value })
              }
            ></input>

            <button id="paymentbtn">Go To Payment</button>
          </Form>
        )}
      </main>
    </>
  );
};
export default Payment;
