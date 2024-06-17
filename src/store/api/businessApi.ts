import { createApi } from '@reduxjs/toolkit/query/react';
import {
  Business,
  BusniessEditFormData,
  BusniessFormData,
} from '../../models/business';
import { AppFetchBaseQuery } from './apiBase';

export const businessApi = createApi({
  reducerPath: 'businessApi',
  baseQuery: AppFetchBaseQuery,
  endpoints: (build) => ({
    fetchAllBusiness: build.query<Business[], any>({
      query: () => ({
        url: '/business',
        method: 'GET',
      }),
      transformResponse: (response: Business[]) => {
        return response;
      },
    }),
    fetchBusinessById: build.query<Business, string>({
      query: (id) => ({
        url: `/business/${id}`,
        method: 'GET',
      }),
    }),
    createBusiness: build.mutation<Business, BusniessFormData>({
      query: (body) => ({
        url: '/business/create',
        method: 'POST',
        body: body,
      }),
    }),
    updateBusiness: build.mutation<Business, BusniessEditFormData>({
      query: (body) => ({
        url: `/business/update/${body.id}`,
        method: 'PUT',
        body: body,
      }),
    }),
    deleteBusiness: build.mutation<string, string>({
      query: (id) => ({
        url: `/business/delete/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateBusinessMutation,
  useDeleteBusinessMutation,
  useFetchAllBusinessQuery,
  useFetchBusinessByIdQuery,
  useUpdateBusinessMutation,
} = businessApi;
