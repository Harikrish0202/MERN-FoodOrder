import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignupDetails.css";

const SignupDetails = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
  });
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/v1/eats/users/signup", userData);
      if (response.status === 201) {
        // User creation successful
        console.log("User created successfully");
        // Optionally,here we reset the form
        setUserData({
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
          phoneNumber: "",
        });
      } else {
        // Handle other response status codes
        console.error("User creation failed");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error);
    }
    navigate("/users/login");
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
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
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
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
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
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
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
              onChange={(e) =>
                setUserData({ ...userData, passwordConfirm: e.target.value })
              }
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
              onChange={(e) =>
                setUserData({ ...userData, phoneNumber: e.target.value })
              }
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
