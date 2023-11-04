// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import { useSelector } from "react-redux";
//Cart Component
function Cart() {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <Link
        to="/cart/cartdetails"
        className="nav-link cart  active"
        style={{ textDecoration: "none", color: "white" }}
      >
        <span className="cartname">Cart</span>

        <span
          id=""
          className={`cartnumber`}
          style={{ display: "inline-block" }}
        >
          {totalQuantity}
        </span>
      </Link>
    </>
  );
}

export default Cart;
