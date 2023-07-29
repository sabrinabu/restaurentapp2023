import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuth0 } from "@auth0/auth0-react";

export const fetchUser = createAsyncThunk("fetchuser", async () => {
  const { getIdTokenClaims } = useAuth0();
  return await getIdTokenClaims().then((result) => {
    return result;
  });
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
      console.log(state.users);
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
