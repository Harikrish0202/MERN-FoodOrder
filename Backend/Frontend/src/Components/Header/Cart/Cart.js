import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
function Cart() {
  return (
    <>
      <Link
        to=".."
        className="nav-link cart  active"
        style={{ textDecoration: "none", color: "white" }}
      >
        <span className="cartname">Cart</span>
        <span className="cartnumber" style={{ display: "inline-block" }}>
          0
        </span>
      </Link>
    </>
  );
}

export default Cart;
