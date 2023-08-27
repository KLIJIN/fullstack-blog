import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/axios";

/* получение одного поста */
const getFullPost = createAsyncThunk('fetchFullPost', async (id: string) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
});




export { getFullPost }