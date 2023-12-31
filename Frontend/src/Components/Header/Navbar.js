import React from "react";
import Search from "./Search";
import Cart from "./Cart/Cart.js";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import "./Header.css";
//Navbar Component
function Navbar() {
  return (
    <div className="navbar sticky-top navbar-expand-md ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand logo_width ">
          <img className="logo" src="/Images/logo.webp" alt="logoImage" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-lg-0 search-cart-login">
            <li className="nav-item search">
              <Routes>
                <Route path="/" element={<Search />} />
                <Route
                  path="/eats/stores/search/:resname"
                  element={<Search />}
                />
              </Routes>
            </li>
            <li className="nav-item active">
              <Cart />
            </li>
            <Login />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
