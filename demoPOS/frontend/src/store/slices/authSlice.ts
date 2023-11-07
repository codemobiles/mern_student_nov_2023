import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  reducers: {
    add: (state) => {
      // do something..
      state.count++;
    },
  },
  initialState: { count: 0 },
});

export default authSlice.reducer;
