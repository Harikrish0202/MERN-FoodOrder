import axios from "axios";
import { userActions } from "./user-slice";

export const signUp = (user) => async (dispatch) => {
  try {
    //Sending the request
    dispatch(userActions.signupRequest());
    //Getting the data from backend
    const { data } = await axios.post("/api/v1/eats/users/signup", user);

    // Set the data into state by using dispatch
    dispatch(
      userActions.signupDetails({
        user: data.user,
      })
    );
  } catch (error) {
    //if any error is there it will throw the error
    dispatch(
      userActions.Errors({
        errors: error.response.data.error,
      })
    );
  }
};

export const Login = (user) => async (dispatch) => {
  try {
    //Sending the request
    dispatch(userActions.loginRequest());
    //Getting the data from backend
    const { data } = await axios.post("/api/v1/eats/users/login", user);
    // Set the data into state by using dispatch
    dispatch(
      userActions.loginDetails({
        user: data.user,
      })
    );
  } catch (error) {
    //if any error is there it will throw the error
    dispatch(
      userActions.Errors({
        errors: error.response.data.error,
      })
    );
  }
};

export const Logout = () => async (dispatch) => {
  try {
    dispatch(userActions.loginRequest());
    await axios.get("/api/v1/eats/users/logout");

    dispatch(
      userActions.logOut({
        user: null,
      })
    );
  } catch (error) {
    dispatch(
      userActions.Errors({
        errors: error.response.data.error,
      })
    );
  }
};

export const currentUser = () => async (dispatch) => {
  try {
    dispatch(userActions.currentUserRequest());
    const { data } = await axios.get("/api/v1/eats/users/me");

    dispatch(
      userActions.currentUser({
        user: data.user || null,
      })
    );
  } catch (error) {
    dispatch(
      userActions.Errors({
        errors: error.response.data.error,
      })
    );
  }
};

export const updateUserData = () => async () => {};
