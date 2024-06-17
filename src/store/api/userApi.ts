import { createApi } from '@reduxjs/toolkit/query/react';
import {
  User,
  UserEditFormData,
  UserFormData,
} from '../../models/user';
import { AppFetchBaseQuery } from './apiBase';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: AppFetchBaseQuery,
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], any>({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
      transformResponse: (response: User[]) => {
        return response;
      },
    }),
    fetchUserById: build.query<User, string>({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'GET',
      }),
    }),
    createUser: build.mutation<User, UserFormData>({
      query: (body) => ({
        url: '/user/create',
        method: 'POST',
        body: body,
      }),
    }),
    updateUser: build.mutation<User, UserEditFormData>({
      query: (body) => ({
        url: `/user/update/${body.id}`,
        method: 'PUT',
        body: body,
      }),
    }),
    deleteUser: build.mutation<string, string>({
      query: (id) => ({
        url: `/user/delete/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useDeleteUserMutation,
  useFetchAllUsersQuery,
  useFetchUserByIdQuery,
  useUpdateUserMutation,
} = userApi;
