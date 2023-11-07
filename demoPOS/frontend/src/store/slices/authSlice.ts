import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const authSlice = createSlice({
  name: "auth",
  reducers: {
    add: (state) => {
      // do something..
      state.count++;
    },

    remove: (state) => {
      // do something..
      state.count--;
    },
  },
  initialState: { count: 0 },
});

export const authSelector = (state: RootState) => state.authReducer;
export const { add } = authSlice.actions;
export default authSlice.reducer;
