import axios from 'axios';

import { BASE_URL } from './shared/constants';

const client = axios.create({
  baseURL: `${BASE_URL}`,
});

/** проверка на наличие токена, если есть, то добавляется header Authorization */
client.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
}


)

export default client;
