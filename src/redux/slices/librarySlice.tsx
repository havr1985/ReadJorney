import { createSlice } from "@reduxjs/toolkit";
import { booksApi } from "../api/books/bookApi";
import { RootState } from "../store";
import { IGetUsersBooks } from "../api/books/types";


const storageBooksJSON: string | null = localStorage.getItem("library");
let storageBooks:IGetUsersBooks[] = [];
if (storageBooksJSON) {
  storageBooks = JSON.parse(storageBooksJSON);
}
const INITIAL_STATE = {
  books: storageBooks,
};

const librarySlice = createSlice({
  name: "library",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      booksApi.endpoints.getUsersBook.matchFulfilled,
      (state, { payload }) => {
        state.books = payload;
        localStorage.setItem("library", JSON.stringify(payload));
      }
    )
        .addMatcher(
            booksApi.endpoints.deleteUsersBook.matchFulfilled,
            (state, { payload }) => {
                state.books = state.books.filter(item => item._id !== payload.id)
                localStorage.setItem("library", JSON.stringify(state.books))
            }
      )
  },
});

export default librarySlice.reducer;
export const selectLibraryBooks = (state: RootState) => state.library.books 
