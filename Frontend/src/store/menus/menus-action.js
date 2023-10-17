import { menuActions } from "./menus-slice";
import axios from "axios";

//This fucntion will run only be calling dispatch function
export const menusData = (id) => async (dispatch) => {
  try {
    // Sending the request to reducers
    dispatch(menuActions.getMenuRequset());

    // here i am geeting the data from backend
    const response = await axios.get(`/api/v1/eats/stores/${id}/menus`);

    //it will throw the error if error is occuring
    if (!response) {
      throw new Error("Could not Fetch Menus");
    }
    const { menu } = response.data;

    //send the data to reducers
    dispatch(
      menuActions.getMenus({
        menus: menu.menu || [],
      })
    );
  } catch (error) {
    dispatch(
      menuActions.getErrors({
        errors: error,
      })
    );
  }
};
