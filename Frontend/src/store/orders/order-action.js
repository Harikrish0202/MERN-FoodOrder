import axios from "axios";
import { ordersAction } from "./order-slice";

export const createOrders = (order) => async (dispatch) => {
  try {
    dispatch(ordersAction.getOrderRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/eats/orders/new", order, config);
    dispatch(ordersAction.createOrder(data));
  } catch (error) {
    dispatch(ordersAction.Errors("Orders could not get stored"));
  }
};
