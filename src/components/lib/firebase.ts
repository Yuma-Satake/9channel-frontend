import { initializeApp } from 'firebase/app';
import {
  VITE_API_KEY,
  VITE_APP_ID,
  VITE_AUTH_DOMAIN,
  VITE_MESSAGING_SENDER_ID,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
} from './env';

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
