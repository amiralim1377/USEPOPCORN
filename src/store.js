import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./Reducer/watchlistReducer";

const persistConfing = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  watchlist: watchlistReducer,
});

const persistedReducer = persistReducer(persistConfing, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
