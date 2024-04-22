import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/users/userApi";
import auth from "./slices/authSlice";
import { booksApi } from "./api/books/bookApi";
import library from './slices/librarySlice';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    auth,
    library,
    filter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, booksApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
