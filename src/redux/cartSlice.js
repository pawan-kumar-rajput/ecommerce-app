import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  amount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProductIndex = state.items.findIndex((product) => product._id === action.payload._id);
      
      if (existingProductIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.amount += action.payload.price;
      } else {
        state.items[existingProductIndex].quantity += 1;
        state.amount += action.payload.price;
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((product) => product._id !== action.payload._id);
      state.amount = state.items.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    incrementQuantity(state, action) {
      const existingProduct = state.items.find((product) => product._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        state.amount += existingProduct.price;
      }
    },
    decrementQuantity(state, action) {
      const existingProduct = state.items.find((product) => product._id === action.payload._id);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        state.amount -= existingProduct.price;
      }
    },
  }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice;