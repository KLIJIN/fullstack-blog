import { createSlice } from "@reduxjs/toolkit";
import { getUserData, setUserData } from "./requests";
import { Auth } from "./types";

const initialState: Auth = {
  data: null,
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
    builder.addCase(setUserData.pending, (state) => {
      console.log('setUserData.pending');
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(setUserData.rejected, (state) => {
      console.log('setUserData.rejected ошибка');
      state.data = null;
      state.status = 'error';
    });
    builder.addCase(setUserData.fulfilled, (state, action) => {
      console.log('setUserData.fulfilled успешно', action);
      state.data = action.payload;
      state.status = 'loaded';
    });

     builder.addCase(getUserData.pending, (state) => {
      console.log('getUserData.pending');
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(getUserData.rejected, (state) => {
      console.log('getUserData.rejected ошибка');
      state.data = null;
      state.status = 'error';
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      console.log('getUserData.fulfilled успешно', action);
      state.data = action.payload;
      state.status = 'loaded';
    });
  }
});

export const { logout } = slice.actions;
export default slice.reducer;
