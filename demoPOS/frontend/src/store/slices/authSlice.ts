import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "@/types/user.type";
import axios from "axios";
import { LoginResult, RegisterResult } from "@/types/auth-result.type";

export interface AuthState {
  loginResult?: LoginResult;
  registerResult?: RegisterResult;
  isAuthenticating: boolean;
  isAuthented: boolean;
  isError: boolean;
  count: number;
}

const initialState: AuthState = {
  isAuthenticating: true,
  isAuthented: false,
  isError: false,
  count: 0,
};

export const login = createAsyncThunk("auth/login", async (values: User) => {
  const result = await axios.post<LoginResult>(
    "http://localhost:8081/api/v2/login",
    values
  );
  if (result.data.result != "ok") {
    throw Error();
  }
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

    setAuthenticating: (state, action) => {
      state.isAuthenticating = action.payload;
    },
  },
  extraReducers: (builder) => {
    // login success
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthented = true;
      state.isAuthenticating = false;
      state.isError = false;
      state.loginResult = action.payload;
    });

    // login failed
    builder.addCase(login.rejected, (state) => {
      state.isAuthented = false;
      state.isAuthenticating = false;
      state.isError = true;
    });

    builder.addCase(login.pending, (state) => {
      state.isAuthenticating = true;
    });
  },
  initialState,
});

export const authSelector = (state: RootState) => state.authReducer;
export const { add, remove } = authSlice.actions;
export default authSlice.reducer;
