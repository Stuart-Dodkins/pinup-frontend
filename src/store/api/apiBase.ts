import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from '../store';

const baseUrl = process.env.REACT_APP_API_BASE;

export const AppFetchBaseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}/`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer ${token}`);
    }
  },
});
