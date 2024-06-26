import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

const status: string | null = ''

const libraryFilterSlice = createSlice({
    name: 'libraryFilter',
    initialState: status,
    reducers: {
        ChangeLibraryFilter(state, { payload }) {
            state = payload;
            return state;
        }
    }
})

export default libraryFilterSlice.reducer;
export const { ChangeLibraryFilter } = libraryFilterSlice.actions;
export const selectLibraryFilter = (state: RootState) => state.libraryFilter;
