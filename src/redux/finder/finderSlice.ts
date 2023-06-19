import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constant";

const finderReducer = createSlice({
  name: "finder",
  initialState,
  reducers: {
    addTweets: (state, payload) => {
      state.tweets = payload;
    },
  },
});

export const { addTweets } = finderReducer.actions;
export default finderReducer.reducer;
