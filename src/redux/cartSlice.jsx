import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
// const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];
console.log(initialState);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
      // localStorage.setItem("cart", JSON.stringify(state)); 
    },
    deleteFromCart(state, action) {
      const updatedState = state.filter((item) => item.id !== action.payload.id);
      // localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    },
    incrementQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        // localStorage.setItem("cart", JSON.stringify(state)); 
      }
    },
    decrementQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        // localStorage.setItem("cart", JSON.stringify(state)); 
      }
    },
  },
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;

