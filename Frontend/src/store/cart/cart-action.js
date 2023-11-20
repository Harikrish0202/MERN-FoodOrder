import axios from "axios";
import { cartActions } from "./cart-slice";

export const addItem = (id) => async (dispatch) => {
  try {
    //Get the fooditem details from backend according to which id you have sent by dispatch
    const { data } = await axios.get(`/api/v1/eats/foods/${id}`);
    const foodItem = data.data;
    console.log(foodItem);
    //here i am sending the fooditem to removing item
    dispatch(
      cartActions.addItemToCart({
        id: foodItem._id,
        image: foodItem.images[0].url,
        name: foodItem.name,
        price: foodItem.price,
        quantity: 1,
        totalPrice: foodItem.price,
      })
    );

    //if any error is there it will catch the error and send to my reducer
  } catch (error) {
    dispatch(cartActions.error("Items Doesn't added"));
  }
};

export const removeItem = (id) => async (dispatch) => {
  try {
    //Get the fooditem details from backend according to which id you have sent by dispatch
    const { data } = await axios.get(`/api/v1/eats/foods/${id}`);
    const foodItem = data.data;
    //here i am sending the fooditem id for removing the item
    dispatch(cartActions.removeItemFromCart(foodItem._id));
    //if any error is there it will catch the error and send to my reducer
  } catch (error) {
    dispatch(cartActions.error("Items Doesn't Removed"));
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    //Get the fooditem details from backend according to which id you have sent by dispatch
    const { data } = await axios.get(`/api/v1/eats/foods/${id}`);
    const foodItem = data.data;
    //here i am sending the fooditem id to my reducers for deleteting the item
    dispatch(cartActions.delItemFromCart(foodItem._id));
    //if any error is there it will catch the error and send to my reducer
  } catch (error) {
    dispatch(cartActions.error("Items Doesn't Removed"));
  }
};

export const saveDeliveryInfo = (deliveryData) => async (dispatch) => {
  try {
    dispatch(cartActions.deliveryInfo(deliveryData));
  } catch (error) {
    dispatch(cartActions.error("Delivery Info Does not Stored"));
  }
};
