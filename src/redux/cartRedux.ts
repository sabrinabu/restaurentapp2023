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
  size: string | undefined;
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
      const existId = state.products.find((x) => x.id === action.payload.id);
      const existsize = state.products.find(
        (x) => x.size === action.payload.size
      );

      if (existId && existsize) {
        state.products = state.products.map((x) =>
          x.size === action.payload.size
            ? { ...existsize, qty: action.payload.qty }
            : x
        );
      } else {
        state.products.push(action.payload);
      }
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
    },
    adjustQuantities: (
      state,
      action: PayloadAction<{ id: number; operation: string }>
    ) => {
      const existId = state.products.find((x) => x.id === action.payload.id);
      console.log(existId);
      if (existId && action.payload.operation === "plus") {
        state.products = state.products.map((x) =>
          x.id === action.payload.id ? { ...existId, qty: existId.qty + 1 } : x
        );
        state.totalquantity += 1;
        state.total = state.total + existId.price;
      }
      if (existId && action.payload.operation === "minus") {
        state.products = state.products.map((x) =>
          x.id === action.payload.id ? { ...existId, qty: existId.qty - 1 } : x
        );
        state.totalquantity -= 1;
        state.total = state.total - existId.price;
      }
    },
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
