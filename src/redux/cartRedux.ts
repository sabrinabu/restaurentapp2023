import { createSlice } from "@reduxjs/toolkit";

// we will develop typescript based enum later on
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    size: "",
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {},
    adjustQuantities: (state, action) => {},
    reset: (state, action) => {},
  },
});

export const { addProduct, removeProduct, adjustQuantities, reset } =
  cartSlice.actions;

export default cartSlice.reducer;
