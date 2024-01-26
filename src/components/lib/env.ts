const apiKey = 'AIzaSyDDpcqlkj8xeXOpjtHtSZwVJAlGxXgiYq8';
const authDomain = 'channel-9-web.firebaseapp.com';
const projectId = 'channel-9-web';
const storageBucket = 'channel-9-web.appspot.com';
const messagingSenderId = '488740948186';
const appId = '1:488740948186:web:1c108baa673b3355fb7de3';

const apiUrl = 'http://35.73.255.103:8080/api/';

export const VITE_API_KEY = String(import.meta.env.VITE_API_KEY ?? apiKey);
export const VITE_AUTH_DOMAIN = String(import.meta.env.VITE_AUTH_DOMAIN ?? authDomain);
export const VITE_PROJECT_ID = String(import.meta.env.VITE_PROJECT_ID ?? projectId);
export const VITE_STORAGE_BUCKET = String(import.meta.env.VITE_STORAGE_BUCKET ?? storageBucket);
export const VITE_MESSAGING_SENDER_ID = String(
  import.meta.env.VITE_MESSAGING_SENDER_ID ?? messagingSenderId
);
export const VITE_APP_ID = String(import.meta.env.VITE_APP_ID ?? appId);
export const VITE_API_URL = String(import.meta.env.VITE_API_URL ?? apiUrl);
