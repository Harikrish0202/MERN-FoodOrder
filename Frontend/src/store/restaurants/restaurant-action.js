import { restaurantAction } from "./restaurant-slice";
import axios from "axios";

export const restaurantsData = () => async (dispatch) => {
  const fetchRestaurantsData = async () => {
    dispatch(restaurantAction.getrequest());
    const response = await axios.get("/api/v1/eats/stores");
    if (!response) {
      throw new Error("Could not fetch RestaurantData data!");
    }
    const data = await response.data;
    return data;
  };

  try {
    const resData = await fetchRestaurantsData();
    dispatch(
      restaurantAction.getRestaurant({
        restaurant: resData.data || [],
      })
    );
  } catch (error) {
    throw new Error("Could not fetch Restaurant data!");
  }
};

// export const specifyresData = () =>
//   async (dispatch) => {
//     const getspecifyRestaurant = async () => {
//       const name = "Hotel Empire";
//       const response = await axios.get(`/api/v1/eats/stores/${name}`);

//       if (!response) {
//         throw new Error("Could not fetch RestaurantData data!");
//       }
//       const data = await response.data;
//       return data;
//     };

//     try {
//       const resData = await getspecifyRestaurant();
//       dispatch(
//         restaurantAction.specifyRestaurant({
//           restaurant: resData.data,
//         })
//       );
//     } catch (error) {
//       throw new Error("Could not fetch Restaurant data!");
//     }
//
// };
