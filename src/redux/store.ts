import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/users/userApi";
import auth from './slices/authSlice'


export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
