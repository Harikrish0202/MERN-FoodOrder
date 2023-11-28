import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./OrderSuccess.css";
import { clearCart } from "../../../store/cart/cart-action";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    function clearEverything() {
      setTimeout(() => {
        dispatch(clearCart());
      }, 1000);
    }
    clearEverything();
  }, [dispatch]);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>

          <h2 style={{ color: "White" }}>
            Your Order has been placed successfully.
          </h2>

          <Link to="/users/orders">Go to Orders</Link>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
