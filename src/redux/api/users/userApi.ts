import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICurrentResponseApi,
  ILoginRequestApi,
  ILogoutResponseApi,
  IRequestRegisterApi,
  IResponseRefreshApi,
  IResponseRegisterApi,
} from "./types";

const BARE_URL = "https://readjourney.b.goit.study/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BARE_URL,
    // prepareHeaders: (headers) => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         headers.set('Authorization', `Bearer ${token}`)
    //     }
    //     return headers
    // }
  }),
  endpoints: (builder) => ({
    register: builder.mutation<IResponseRegisterApi, IRequestRegisterApi>({
      query: (body) => ({
        url: "users/signup",
        method: "POST",
        body,
      }),
      transformResponse: (response: IResponseRegisterApi) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("refresh_token", response.refreshToken);
        return response;
      },
    }),
    login: builder.mutation<IResponseRegisterApi, ILoginRequestApi>({
      query: (body) => ({
        url: "users/signin",
        method: "POST",
        body,
      }),
      transformResponse: (response: IResponseRegisterApi) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("refresh_token", response.refreshToken);
        return response;
      },
    }),
    refresh: builder.mutation<IResponseRefreshApi, void>({
      query: () => ({
        url: "/users/current/refresh",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
        },
      }),
      transformResponse: (response: IResponseRefreshApi) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("refresh_token", response.refreshToken);
        return response;
      },
    }),
    logout: builder.mutation<ILogoutResponseApi, null>({
      query: () => ({
        url: "users/signout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      transformResponse: (response: ILogoutResponseApi) => {
        localStorage.setItem("token", "");
        localStorage.setItem("refresh_token", "");
        return response;
      },
    }),
    current: builder.query<ICurrentResponseApi, null>({
      query: () => ({
        url: "/users/current",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useCurrentQuery,
  useRefreshMutation,
  useLogoutMutation,
} = userApi;

export const { refresh } = userApi.endpoints;