import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { useAuth0 } from "@auth0/auth0-react";

export const fetchUser = createAsyncThunk("fetchuser", async () => {
  console.log("fetcher called");
  /*const { getIdTokenClaims } = useAuth0();
  return await getIdTokenClaims().then((response) => {
    return response;
  });*/
});

export type UserInfo = {
  role: string;
  nickname: string | undefined;
  name: string | undefined;
  picture: string | undefined;
  updated_at: string | undefined;
  email: string | undefined;
  email_verified: boolean | undefined;
  iss: string | undefined;
  sid: string | undefined;
};

type InitialState = {
  user: UserInfo;
};

const initialState: InitialState = {
  user: {
    role: "",
    nickname: "",
    name: "",
    picture: "",
    updated_at: "",
    email: "",
    email_verified: false,
    iss: "",
    sid: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: InitialState, action: PayloadAction<UserInfo>) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
  /*extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = {
        role: action.payload?.["user/role"][0],
        nickname: action.payload?.nickname,
        name: action.payload?.name,
        picture: action.payload?.picture,
        updated_at: action.payload?.updated_at,
        email: action.payload?.email,
        email_verified: action.payload?.email_verified,
        iss: action.payload?.iss,
        sid: action.payload?.sid,
      };
      console.log("fetchUser Succeed");
    });*/
  /*
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("fetchUser rejected");
    });
    builder.addCase(fetchUser.pending, (state, action) => {
      console.log("fetchUser pending");
    });
    */
  //},
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
