import { Link } from "react-router-dom";
import "../Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../../store/user/user-action";
import { toast } from "react-toastify";

//Login Component
const Login = () => {
  // Here i am getting the userinformation from by useSelectors
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(Logout());
    toast.success("User Loggedout successfully");
  };

  return (
    <>
      {/* if user is there this dropdown will be shown with userdetails in the Navbar  */}
      {user && (
        <li className="nav-item dropdown">
          <Link
            className="nav-link nav_login text-white dropdown-icon dropdown-toggle"
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
              <Link className="dropdown-item" to="/users/me">
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/users/orders">
                My orders
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </li>
      )}
      {/* if user is not there it will only display the login button */}
      {!user && (
        <li className="nav-item dropdown">
          <Link
            className="nav-link nav_login text-white "
            to="/users/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Login</span>
          </Link>
        </li>
      )}
    </>
  );
};

export default Login;
