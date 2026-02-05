import axios from 'axios';
import { API_BASE_URL } from '@env';
import { API_TIMEOUT } from '@constants/index';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    //TODO: attach token
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  error => {
    const status = error.response?.status;

    if (status === 401) {
      console.log('Unauthorized');
      //TODO: logout later
    }

    return Promise.reject(error);
  },
);
