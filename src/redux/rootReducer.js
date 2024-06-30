import { combineReducers } from "@reduxjs/toolkit";
import userDetailsReducer from "./slices/userDetailsSlice";
import messageDetailsReducer from "./slices/messageDetailsSlice";

const rootReducer = combineReducers({
  userDetails: userDetailsReducer,
  messageDetails: messageDetailsReducer,
});

export default rootReducer;
