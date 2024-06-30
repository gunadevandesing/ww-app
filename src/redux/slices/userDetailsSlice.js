import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  uid: "",
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
