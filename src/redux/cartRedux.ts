import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum Size {
  S,
  M,
  L,
  XL,
  XXL,
}

export type CartProduct = {
  id: number;
  title: string;
  img?: string;
  price: number;
  size: string;
  qty: number;
};

type InitialState = {
  products: CartProduct[];
  totalquantity: number;
  total: number;
};

const initialState: InitialState = {
  products: [],
  totalquantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
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
    removeProduct: (
      state,
      action: PayloadAction<{ id: number; qty: number; price: number }>
    ) => {
      state.products = state.products.filter((product) => {
        return product.id != action.payload.id;
      });
      state.totalquantity -= action.payload.qty;
      state.total -= action.payload.price * action.payload.qty;
      console.log(state.total);
      state.total = Math.round(state.total);
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
