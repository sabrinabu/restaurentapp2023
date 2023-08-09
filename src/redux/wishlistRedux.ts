import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../data";

export type WishItem = {
  id: string;
  wishproduct: Product;
};

type InitialState = {
  wishItems: WishItem[];
};

const initialState: InitialState = {
  wishItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addwishlist: (state, action: PayloadAction<WishItem>) => {
      const existItem = state.wishItems.find(
        (wishItem) =>
          wishItem.wishproduct.title === action.payload.wishproduct.title &&
          wishItem.wishproduct.productType ===
            action.payload.wishproduct.productType &&
          wishItem.wishproduct.price === action.payload.wishproduct.price
      );

      if (!existItem) {
        const wishlist: WishItem = {
          id: uuidv4(),
          wishproduct: action.payload.wishproduct,
        };
        state.wishItems.push(wishlist);
      }
    },
    removeWishProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.wishItems = state.wishItems.filter((wishItem) => {
        return wishItem.id != action.payload.id;
      });
    },
  },
});

export const { addwishlist, removeWishProduct } = wishlistSlice.actions;

export default wishlistSlice.reducer;
