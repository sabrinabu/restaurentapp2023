import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../data";

export enum Size {
  S,
  M,
  L,
  XL,
  XXL,
}

export type CartItem = {
  id: string;
  product: Product;
  size: string | undefined;
  qty: number;
};

type InitialState = {
  cartItems: CartItem[];
  totalquantity: number;
  total: number;
};

const initialState: InitialState = {
  cartItems: [],
  totalquantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItem>) => {
      const existId = state.cartItems.find(
        (cartItem) =>
          cartItem.product.id === action.payload.product.id &&
          cartItem.product.title === action.payload.product.title &&
          cartItem.product.desc === action.payload.product.desc &&
          cartItem.product.price === action.payload.product.price &&
          cartItem.size === action.payload.size
      );
      if (existId) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existId.id
            ? { ...existId, qty: existId.qty + action.payload.qty }
            : x
        );
      } else {
        const cartItem: CartItem = {
          id: uuidv4(),
          product: action.payload.product,
          qty: action.payload.qty,
          size: action.payload.size,
        };
        state.cartItems.push(cartItem);
      }
      state.totalquantity += action.payload.qty;
      state.total += action.payload.product.price * action.payload.qty;
    },
    removeProduct: (
      state,
      action: PayloadAction<{
        cartItemId: string;
        qty: number;
        price: number;
      }>
    ) => {
      state.cartItems = state.cartItems.filter((cartItem) => {
        return cartItem.id != action.payload.cartItemId;
      });
      state.totalquantity -= action.payload.qty;
      state.total -= action.payload.price * action.payload.qty;
    },
    adjustQuantities: (
      state,
      action: PayloadAction<{
        cartItemId: string;
        operation: string;
      }>
    ) => {
      const existId = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.cartItemId
      );

      if (existId && action.payload.operation === "plus") {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === existId.id
            ? { ...existId, qty: existId.qty + 1 }
            : cartItem
        );
        state.totalquantity += 1;
        state.total = state.total + existId.product.price;
      } else if (existId && action.payload.operation === "minus") {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === existId.id
            ? { ...existId, qty: existId.qty - 1 }
            : cartItem
        );
        state.totalquantity -= 1;
        state.total = state.total - existId.product.price;
      }
    },
    reset: (state) => {
      state.cartItems = [];
      state.totalquantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, adjustQuantities, reset } =
  cartSlice.actions;

export default cartSlice.reducer;
