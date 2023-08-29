import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/axios";
import { UserParams } from "./types";


/** отправка информации по пользователю */
const setUserData = createAsyncThunk('setUserData', async (params: UserParams) => {
  const response = await axios.post(`/auth/login`, params);
  return response.data;
});


/** получение информации по пользователю */
const getUserData = createAsyncThunk('getUserData', async () => {
  const response = await axios.post(`/auth/me`);
  return response.data;
});

export { setUserData, getUserData };
