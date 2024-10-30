import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addwatch(state, action) {
      state.push(action.payload);
    },
    removewatch(state, action) {
      return state.filter((item) => item.imdbID !== action.payload);
    },
  },
});

export const { addwatch, removewatch } = watchlistSlice.actions;

export default watchlistSlice.reducer;
