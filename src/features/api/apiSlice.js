import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hp-api-marcosmarp.herokuapp.com/api/characters",
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const { useGetFavoriteCharactersQuery, useGetCharacterQuery } = apiSlice;
