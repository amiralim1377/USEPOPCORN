import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./Reducer/watchlistReducer";

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});

export default store;
