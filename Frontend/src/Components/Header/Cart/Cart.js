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

<<<<<<< HEAD
        <span
          id=""
          className={`cartnumber`}
          style={{ display: "inline-block" }}
        >
=======
        <span className="cartnumber" style={{ display: "inline-block" }}>
>>>>>>> 5430afa5dc18718fb6b762b34e2f6f80943913d4
          {totalQuantity}
        </span>
      </Link>
    </>
  );
}

export default Cart;
