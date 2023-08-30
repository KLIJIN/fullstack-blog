import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/axios";

/* получение одного поста */
const getFullPost = createAsyncThunk("fetchFullPost", async (id: string) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
});

/* отправка файла на сервер */
const setFile = createAsyncThunk("setFile", async (formData: FormData) => {
  const response = await axios.post(`/upload`, formData);
  return response.data;
});

/* удаление одного поста */
const deleteOnePost = createAsyncThunk("deleteOnePost", async (id: string) => {
  const response = await axios.delete(`/posts/${id}`);
  return response.data;
});

export { getFullPost, setFile, deleteOnePost };
