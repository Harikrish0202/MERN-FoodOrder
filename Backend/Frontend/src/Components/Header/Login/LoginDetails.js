import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "./LoginDetails.css";

const LoginDetails = () => {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    navigate("..");
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
            <input type="email" name="email" className="email_input" required />
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
            />
          </div>
          <Link to="/" className="forgot_password">
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
