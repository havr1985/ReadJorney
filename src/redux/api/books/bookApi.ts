import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAddBookByIdResponse, IRecommendBookResponse } from "./types";

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
  endpoints: (builder) => ({
      recommend: builder.query<IRecommendBookResponse, { page: number; perPage: number}>({
      query: ({page, perPage}) => ({
        url: `/recommend?page=${page}&limit=${perPage}`,
      }),
      }),
    addBookById: builder.mutation<IAddBookByIdResponse, { _id: string }>({
      query: ({ _id }) => ({
        url: `/add/${_id}`,
        method: 'POST',
      })
    })
  }),
});

export const { useRecommendQuery, useAddBookByIdMutation } = booksApi;
