import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constant";

const numberOfResultsSlice = createSlice({
  name: "numberOfResults",
  initialState,
  reducers: {
    setNumberOfResults: (state, action) => {
      return action.payload;
    },
  },
});
export const { setNumberOfResults } = numberOfResultsSlice.actions;
export default numberOfResultsSlice.reducer;
