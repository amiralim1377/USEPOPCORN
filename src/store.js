import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./Reducer/watchlistReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

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
