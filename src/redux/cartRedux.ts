import { createSlice } from "@reduxjs/toolkit";

// we will develop typescript based enum later on
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalquantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const exist = state.products.find((x) => x.id === action.payload.id);
      if (exist) {
        state.products = state.products.map((x) =>
          x.id === action.payload.id ? { ...exist, qty: exist.qty + 1 } : x
        );
      } else {
        state.products.push(action.payload);
      }
      //state.products.push(action.payload);
      state.totalquantity += 1;
      state.total += action.payload.price * action.payload.qty;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.id != action.payload.id;
      });
    },
    adjustQuantities: (state, action) => {},
    reset: (state) => {
      state.products = [];
      state.totalquantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, adjustQuantities, reset } =
  cartSlice.actions;

export default cartSlice.reducer;
