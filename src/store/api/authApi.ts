import { createApi } from '@reduxjs/toolkit/dist/query';
import { AppFetchBaseQuery } from './apiBase';
import { AuthParams, LoginParams } from '../../models/auth';

export const authApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: AppFetchBaseQuery,
  endpoints: (build) => ({
    userAuth: build.mutation<AuthParams, LoginParams>({
      query: (body) => ({
        url: '/auth/login/user',
        method: 'POST',
        body: body,
      }),
    }),
    businessAuth: build.mutation<AuthParams, LoginParams>({
      query: (body) => ({
        url: '/auth/login/business',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});
