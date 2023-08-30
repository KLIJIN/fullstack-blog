import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/axios";

/* получение всех постов */
const getPosts = createAsyncThunk('fetchPosts', async () => {
  const response = await axios.get('/posts');
  return response.data;
});

/* получение всех тэгов */
const getTags = createAsyncThunk('fetchTags', async () => {
  const response = await axios.get('/posts/tags');
  return response.data;
});


export { getPosts, getTags }