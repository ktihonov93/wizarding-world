import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hp-api.onrender.com/api/characters",
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query({
      query: (id) => '/',
      transformResponse: (responseData, meta, id) => responseData.find((el) => el.id === id),
    }),
  }),
});

export const { useGetFavoriteCharactersQuery, useGetCharacterQuery } = apiSlice;
