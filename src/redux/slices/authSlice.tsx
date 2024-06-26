import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api/users/userApi";
import { RootState } from "../store";

const INITIAL_STATE = {
  user: {
    email: "",
    name: "",
    token: "",
    refreshToken: "",
  },
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addMatcher(
              userApi.endpoints.register.matchFulfilled,
              (state, { payload }) => {
                  state.user = payload;
                  state.isAuth = true;
              }
          )
          .addMatcher(
              userApi.endpoints.login.matchFulfilled,
              (state, { payload }) => {
                  state.user = payload;
                  state.isAuth = true;
              }
          )
          .addMatcher(
              userApi.endpoints.logout.matchFulfilled,
              () => INITIAL_STATE
      )
          .addMatcher(
              userApi.endpoints.current.matchFulfilled,
              (state, { payload }) => {
                  state.user = payload;
                  state.isAuth = true;
              }
      )
          
  },
});

export default authSlice.reducer;
export const selectIsAuthUser = (state: RootState) => state.auth.isAuth;
