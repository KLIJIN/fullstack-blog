import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getTags } from "./requests";
import { Posts } from "./types";


const initialState = {
  posts: {
    items: [] as Posts[],
    status: 'loading',
  },
  tags: {
    items: [],
    status: 'loading',
  },
  comments: {
    items: [],
    status: 'loading',
  },
}

const slice = createSlice({
  name: 'posts',
  initialState,
  // синхронные экшены
  reducers: {},
  // асинхронные экшены
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      console.log('getPosts.pending');
      state.posts.status = 'loading';
    });
    builder.addCase(getPosts.rejected, (state) => {
      console.log('getPosts.rejected ошибка');
      state.posts = {
        items: [],
        status: 'error',
      };
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      console.log('getPosts.fulfilled успешно', action);
      state.posts = {
        items: action.payload,
        status: 'loaded',
      };
    });
    // получение тегов
    builder.addCase(getTags.pending, (state) => {
      console.log('getPosts.pending');
      state.tags.status = 'loading';
    });
    builder.addCase(getTags.rejected, (state) => {
      console.log('getPosts.rejected ошибка');
      state.tags = {
        items: [],
        status: 'error',
      };
    });
    builder.addCase(getTags.fulfilled, (state, action) => {
      console.log('getPosts.fulfilled успешно', action);
      state.tags = {
        items: action.payload,
        status: 'loaded',
      };
    });
  }
});


export default slice.reducer
