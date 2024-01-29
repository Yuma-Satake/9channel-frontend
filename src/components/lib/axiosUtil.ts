import axios from 'axios';
import { VITE_API_URL } from './env';

export const axiosBase = axios.create({
  baseURL: VITE_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    function transformRequest(data) {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    function transformResponse(data) {
      return JSON.parse(data);
    },
  ],
});
