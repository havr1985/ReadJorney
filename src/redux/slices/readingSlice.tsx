import { createSlice } from "@reduxjs/toolkit";
import { IGetFinishBook } from "../api/books/types";
import { booksApi } from "../api/books/bookApi";
import { RootState } from "../store";


interface IInitialState {
    readingBook: IGetFinishBook | null;
    isReading: boolean;
}

const INITIAL_STATE: IInitialState = {
    readingBook: null,
    isReading:false
}

const readingSlice = createSlice({
    name: 'reading',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                booksApi.endpoints.getBookById.matchFulfilled,
                (state, { payload }) => {
                    state.readingBook = payload
                }
        )
            .addMatcher(
                booksApi.endpoints.readingStart.matchFulfilled,
                (state, { payload }) => {
                    state.readingBook = payload;
                    state.isReading = true;
                }
        )
            .addMatcher(
                booksApi.endpoints.readingFinish.matchFulfilled,
                (state, { payload }) => {
                    state.readingBook = payload;
                    state.isReading = false;
                }
        )
    },
})


export default readingSlice.reducer;
export const selectReadingBook = (state: RootState) => state.reading.readingBook;