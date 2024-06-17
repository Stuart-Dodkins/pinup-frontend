import { createApi } from '@reduxjs/toolkit/query/react';
import { AppFetchBaseQuery } from './apiBase';
import { AuthParams, LoginParams, UserAuth } from '../../models/auth';

export const authApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: AppFetchBaseQuery,
  endpoints: (build) => ({
    userAuth: build.mutation<UserAuth, LoginParams>({
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

export const {
  useBusinessAuthMutation,
  useUserAuthMutation
} = authApi
