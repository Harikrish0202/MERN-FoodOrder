import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, error: null },
  reducers: {
    addItemToCart(state, action) {
      //new item
      const newItem = action.payload;
      //existingitem
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //whenever user adding the item the total quantity will increase
      state.totalQuantity++;
      //if the item is does not exist it will push the newitem into the state
      if (!existingItem) {
        state.items.push(newItem);
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
      if (existingItem.quantity === 1) {
        //if already existing item quantity is 1 means i have to remove the item from existing item
        state.items = state.items.filter((item) => item.id !== id);
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
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    //for get the error
    error(state, action) {
      state.error = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
