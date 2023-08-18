import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ShippingItem = {
  fullName: string;
  address: string;
  city: string;
  postalCode: number;
  country: string;
};

type InitialState = {
  shippingItems: ShippingItem[];
};

const initialState: InitialState = {
  shippingItems: [],
};

    

const shippingSlice = createSlice({
  name: "shipping",
  initialState,

  reducers: {
    saveShippingAddress: (state, action: PayloadAction<ShippingItem>) => {
      state.shippingItems.push(action.payload);
      console.log(state.shippingItems)

      if( state.shippingItems.length>0){
        const update=state.shippingItems.slice(state.shippingItems.length-1,state.shippingItems.length)
        state.shippingItems=update;
            console.log(state.shippingItems.length)
            console.log(update)

      }
    
    
    },
  },
});

export const { saveShippingAddress } = shippingSlice.actions;

export default shippingSlice.reducer;
