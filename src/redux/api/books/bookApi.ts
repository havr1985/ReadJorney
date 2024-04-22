import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IAddBookByIdResponse,
  IGetUsersBooks,
  IRecommendBookResponse,
} from "./types";

const BARE_URL = "https://readjourney.b.goit.study/api/books";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BARE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    recommend: builder.query<
      IRecommendBookResponse,
      { page: number; perPage: number; title: string; author: string }
    >({
      query: ({ page, perPage, title, author }) => ({
        url: `/recommend?page=${page}&limit=${perPage}&title=${title}&author=${author}`,
      }),
    }),
    addBookById: builder.mutation<IAddBookByIdResponse, { _id: string }>({
      query: ({ _id }) => ({
        url: `/add/${_id}`,
        method: "POST",
      }),
    }),
    getUsersBook: builder.query<IGetUsersBooks[], void>({
      query: () => ({
        url: "/own",
        method: "GET",
      }),
    }),
    deleteUsersBook: builder.mutation<
      { message: string; id: string },
      { _id: string }
    >({
      query: ({ _id }) => ({
        url: `/remove/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useRecommendQuery,
  useAddBookByIdMutation,
  useGetUsersBookQuery,
  useDeleteUsersBookMutation,
} = booksApi;
