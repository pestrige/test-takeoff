import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { reducer } from './reducer';

const SERVER_URL = 'https://my-json-server.typicode.com/pestrige/test-takeoff';
const REQUEST_TIMEOUT = 5000;

const api = axios.create({
  baseURL: SERVER_URL,
  timeout: REQUEST_TIMEOUT,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
    serializableCheck: false,
  }),
});
