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

        <span className="cartnumber" style={{ display: "inline-block" }}>
          0
=======
        <span
          id=""
          className={`cartnumber`}
          style={{ display: "inline-block" }}
        >
          {totalQuantity}
>>>>>>> f7bdf6a3c1e5e64391c4a206c13bfc2fa56f99c2
        </span>
      </Link>
    </>
  );
}

export default Cart;
