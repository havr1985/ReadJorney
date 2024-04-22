import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const INITIAL_STATE = {
  title: "",
  author: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    ChangeFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export default filterSlice.reducer;
export const { ChangeFilter } = filterSlice.actions;
export const selectRecommendFilter = (state: RootState) => state.filter
