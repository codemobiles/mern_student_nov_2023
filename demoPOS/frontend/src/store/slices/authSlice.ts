import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "@/types/user.type";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (values: User) => {
  const result = await axios.post(
    "http://localhost:8081/api/v2/register",
    values
  );

  return result.data;
});

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
  extraReducers: (builder) => {},
  initialState: { count: 0 },
});

export const authSelector = (state: RootState) => state.authReducer;
export const { add, remove } = authSlice.actions;
export default authSlice.reducer;
