import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "./LoginDetails.css";
import axios from "axios";

const LoginDetails = () => {
  //useNavigate is used to redirect the page
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/v1/eats/users/login", userData);
      console.log(response);
      if (response.status === 200) {
        console.log("user logged in successfully!");
        setUserData({
          email: "",
          password: "",
        });
      } else {
        console.log("user logged in failed!");
      }
    } catch (error) {
      console.log("error:", error);
    }
    //once the submission gets succesfully after that this page will goes to home page automatically
    navigate("/");
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
