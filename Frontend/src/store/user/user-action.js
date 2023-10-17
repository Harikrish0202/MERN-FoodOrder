import axios from "axios";
import { userActions } from "./user-slice";

export const signUp = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getSignupRequest);
    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    const { data } = await axios.post("/api/v1/eats/users/signup", user);

    dispatch(
      userActions.getSignupDetails({
        user: data.user,
      })
    );
  } catch (error) {
    dispatch(
      userActions.getErrors({
        errors: error,
      })
    );
  }
};
