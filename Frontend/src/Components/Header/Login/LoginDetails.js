import React, { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./LoginDetails.css";

import { Login } from "../../../store/user/user-action";
import { toast } from "react-toastify";
import { userActions } from "../../../store/user/user-slice";

const LoginDetails = () => {
  //useNavigate is used to redirect the page
  const { isAuthenticated, errors } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("User Login Successfully");
      //once the submission gets succesfully after that this page will goes to home page automatically
      navigate("/");
    } else {
      toast.error(errors);
      dispatch(userActions.Errors([]));
    }
  }, [dispatch, isAuthenticated, navigate, errors]);

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(Login(userData));
  };
  return (
    <main className="form_container">
      <Form className="form" onSubmit={submitHandler}>
        <fieldset className="formfield">
          <h1>Login</h1>
          <div className="email">
            <label htmlFor="email" className="email_label">
              Email
            </label>
            <br></br>
            <input
              type="email"
              name="email"
              className="email_input"
              autoComplete="username"
              required
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="password">
            <label htmlFor="password" className="password_label">
              Password
            </label>
            <br></br>
            <input
              type="password"
              name="password"
              className="password_input"
              autoComplete="current-password"
              required
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
          </div>
          <Link to="/users/forgotPassword" className="forgot_password">
            Forgot Password?
          </Link>

          <button className="login_button">LOGIN</button>
          <Link to="/users/signup" className="new_user">
            New User?
          </Link>
        </fieldset>
      </Form>
    </main>
  );
};

export default LoginDetails;
