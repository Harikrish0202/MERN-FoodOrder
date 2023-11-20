import { createSlice } from "@reduxjs/toolkit";

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity")) || [0];
// const deliveryInfo = JSON.parse(localStorage.getItem("deliveryInfo")) || {};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: cartItems,
    totalQuantity,
    deliveryInfo: {},
    error: null,
  },
  reducers: {
    addItemToCart(state, action) {
      //new item
      const newItem = action.payload;
      //existingitem
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //whenever user adding the item the total quantity will increase
      state.totalQuantity++;
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );

      //if the item is does not exist it will push the newitem into the state
      if (!existingItem) {
        state.items.push(newItem);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } else {
        //if the item is already exist it will increase the quantity and price
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      //Getting the id
      const id = action.payload;
      //Existing item
      const existingItem = state.items.find((item) => item.id === id);
      //whenever user removing the item the total quantity will decrease
      state.totalQuantity--;
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      if (existingItem.quantity === 1) {
        //if already existing item quantity is 1 means i have to remove the item from existing item
        state.items = state.items.filter((item) => item.id !== id);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } else {
        //if the item is already exist it will decrease the quantity and price
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    delItemFromCart(state, action) {
      //Getting the id
      const id = action.payload;
      //Checking whether the item is in existing item or not
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        //if it's true i have to delete item from my existingitems and also i have to decrease the quantity
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        localStorage.setItem(
          "totalQuantity",
          JSON.stringify(state.totalQuantity)
        );
        state.items = state.items.filter((item) => item.id !== id);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    deliveryInfo(state, action) {
      state.deliveryInfo = action.payload;
      // localStorage.setItem("deliveryInfo", JSON.stringify(state.deliveryInfo));
    },
    //for get the error
    error(state, action) {
      state.error = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
