import { Axios } from 'axios';
import { VITE_API_URL } from './env';

export const axiosBase = new Axios({
  baseURL: VITE_API_URL,
  responseType: 'json',
  headers: { 'Access-Control-Allow-Origin': '*' },
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
