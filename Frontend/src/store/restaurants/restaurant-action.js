import { restaurantAction } from "./restaurant-slice";
import axios from "axios";

export const restaurantsData = () => async (dispatch) => {
  try {
    dispatch(restaurantAction.getrequest());
    const response = await axios.get("/api/v1/eats/stores");
    if (!response) {
      throw new Error("Could not fetch RestaurantData data!");
    }
    const data = await response.data;
    dispatch(
      restaurantAction.getRestaurant({
        restaurant: data.data || [],
      })
    );
  } catch (error) {
    dispatch(
      restaurantAction.getErrors({
        errors: error,
      })
    );
  }
};
