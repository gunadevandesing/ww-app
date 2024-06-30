import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const messageDetailsSlice = createSlice({
  name: "messageDetails",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = messageDetailsSlice.actions;

export default messageDetailsSlice.reducer;
