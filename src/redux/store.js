import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});

export default store;
