import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

function Login() {
  return (
    <>
      <Link
        className="nav-link nav_login text-white"
        to="/users/login"
        // id="navbarScrollingDropdown"
        // role="button"
        // data-bs-toggle="dropdown"
        // aria-expanded="false"
        style={{ textDecoration: "none", color: "white" }}
      >
        <span>Login</span>
      </Link>
      {/* <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
        <li>
          <Link className="dropdown-item" to="/">
            Login
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/">
            Logout
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="/">
            SignUp
          </Link>
        </li>
      </ul> */}
    </>
  );
}

export default Login;
