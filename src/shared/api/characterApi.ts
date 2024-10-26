import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Characters } from "./types";

export const characterApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hp-api.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query<
      Characters,
      { searchDebounced: string; CARDS_ON_PAGE: number }
    >({
      query: () => "characters",
      transformResponse: (
        responseData: Characters,
        meta,
        { searchDebounced, CARDS_ON_PAGE }
      ) =>
        responseData
          .filter((character) =>
            character.name.toLowerCase().includes(searchDebounced.toLowerCase())
          )
          .slice(0, CARDS_ON_PAGE),
    }),
    getFavoriteCharacters: builder.query<Characters, string>({
      query: (id) => "characters",
      transformResponse: (responseData: Characters, meta, id) =>
        responseData.filter((item) => item.id === id),
    }),
  }),
});

export const { useGetFavoriteCharactersQuery, useGetCharacterQuery } =
  characterApi;
