import React from "react";
import { Form, useNavigate } from "react-router-dom";
import "./SignupDetails.css";

const SignupDetails = () => {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();

    navigate("..");
  };
  return (
    <main className="signup_form_container">
      <Form className="signup_form" onSubmit={submitHandler}>
        <fieldset className="signup_formfield">
          <h1>Signup</h1>
          <div className="signup_name">
            <label htmlFor="name" className="signup_name_label">
              Name
            </label>
            <br></br>
            <input
              type="text"
              name="name"
              className="signup_name_input"
              required
            />
          </div>
          <div className="signup_email">
            <label htmlFor="email" className="signup_email_label">
              Email
            </label>
            <br></br>
            <input
              type="email"
              name="signup_email"
              className="signup_email_input"
              required
            />
          </div>
          <div className="signup_password">
            <label htmlFor="password" className="signup_password_label">
              Password
            </label>
            <br></br>
            <input
              type="password"
              name="signup_password"
              className="signup_password_input"
              required
            />
          </div>
          <div className="signup_confirm">
            <label htmlFor="confirm" className="signup_confirm_label">
              Confirm Password
            </label>
            <br></br>
            <input
              type="password"
              name="signup_confirm"
              className="signup_confirm_input"
              required
            />
          </div>
          <div className="signup_number">
            <label htmlFor="number" className="signup_number_label">
              Phone Number
            </label>
            <br></br>
            <input
              type="number"
              name="number"
              className="signup_number_input"
              required
            />
          </div>
          <br></br>
          <button className="register_button">Register</button>
        </fieldset>
      </Form>
    </main>
  );
};

export default SignupDetails;
