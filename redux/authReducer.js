import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  username: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.id = null;
      state.username = null;
      state.email = null;
    }
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
