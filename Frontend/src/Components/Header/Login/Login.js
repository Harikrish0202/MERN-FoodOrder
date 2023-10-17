import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import { useSelector } from "react-redux";

//Login Component
function Login() {
  // Here i am getting the userinformation from by useSelectors
  const { user } = useSelector((state) => state.users);
  console.log(user);

  return (
    <>
      {/* if user is there this dropdown will be shown with userdetails in the Navbar  */}
      {user && (
        <li className="nav-item dropdown">
          <Link
            className="nav-link nav_login text-white"
            to="/users/login"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>{user.name}</span>
          </Link>

          <ul
            className="dropdown-menu "
            aria-labelledby="navbarScrollingDropdown"
          >
            <li>
              <Link className="dropdown-item" to="/">
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                My orders
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      )}
      {/* if user is not there it will only display the login button */}
      {!user && (
        <Link
          className="nav-link nav_login text-white "
          to="/users/login"
          style={{ textDecoration: "none", color: "white" }}
        >
          <span>Login</span>
        </Link>
      )}
    </>
  );
}

export default Login;
