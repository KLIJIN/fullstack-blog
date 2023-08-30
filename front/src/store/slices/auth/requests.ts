import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/axios";
import { RegisterParams, UserParams } from "./types";


/** авторизация пользователя */
const setUserData = createAsyncThunk('setUserData', async (params: UserParams) => {
  const response = await axios.post(`/auth/login`, params);
  return response.data;
});

/** получение информации по пользователю */
const getUserData = createAsyncThunk('getUserData', async () => {
  const response = await axios.post(`/auth/me`);
  return response.data;
});

/** регистрация нового пользователя */
const setNewUser = createAsyncThunk('setNewUser', async (params: RegisterParams) => {
  const response = await axios.post(`/auth/register`, params);
  return response.data;
});

export { setUserData, getUserData, setNewUser };
