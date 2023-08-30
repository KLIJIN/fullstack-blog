import { createSlice } from "@reduxjs/toolkit";
import { getFullPost } from "./requests";
import { FullPost } from "./types";

const initialState: FullPost = {
  data: null,
  status: "loading"
};

const slice = createSlice({
  name: "fullPost",
  initialState,
  // синхронные экшены
  reducers: {},
  // асинхронные экшены
  extraReducers: (builder) => {
    builder.addCase(getFullPost.pending, (state) => {
      console.log("getFullPost.pending");
      state.status = "loading";
    });
    builder.addCase(getFullPost.rejected, (state) => {
      console.log("getPosts.rejected ошибка");
      state.data = null;
      state.status = "error";
    });
    builder.addCase(getFullPost.fulfilled, (state, action) => {
      console.log("getFullPost.fulfilled успешно", action);
      const { doc, user } = action.payload;
      state.data = { ...doc, user };
      state.status = "loaded";
    });
  }
});

export default slice.reducer;
