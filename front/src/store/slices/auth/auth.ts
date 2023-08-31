import { createSlice } from "@reduxjs/toolkit";
import { getUserData, setUserData, setNewUser } from "./requests";
import { Auth } from "./types";

const initialState: Auth = {
  data: {
    userData: null,
  },
  status: 'loading',
}

const slice = createSlice({
  name: 'auth',
  initialState,
  // синхронные экшены
  reducers: {
    logout: () => initialState,
  },
  // асинхронные экшены
  extraReducers: (builder) => {
    // ===============
    builder.addCase(setUserData.pending, (state) => {
      state.status = 'loading';
      state.data.userData = null;
    });
    builder.addCase(setUserData.rejected, (state) => {
      state.data.userData = null;
      state.status = 'error';
    });
    builder.addCase(setUserData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    });
    // ===============
    builder.addCase(getUserData.pending, (state) => {
      state.data.userData = null;
      state.status = 'loading';
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.data.userData = null;
      state.status = 'error';
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.data.userData = action.payload;
      state.status = 'loaded';
    });
    // ===============
    builder.addCase(setNewUser.pending, (state) => {
      state.status = 'loading';
      state.data.userData = null;
    });
    builder.addCase(setNewUser.rejected, (state) => {
      state.data.userData = null;
      state.status = 'error';
    });
    builder.addCase(setNewUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    });
  }
});

export const { logout } = slice.actions;
export default slice.reducer;


// setNewUser