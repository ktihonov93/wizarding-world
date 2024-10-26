import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character, Characters } from "./types";

export const characterApi = createApi({
  reducerPath: "api",
  tagTypes: ["Characters"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hp-api.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query<Characters, { searchDebounced: string; cardsOnPage: number }>({
      query: () => "characters",
      transformResponse: (responseData: Characters, meta, { searchDebounced, cardsOnPage }) =>
        responseData.filter((character: { name: string }) =>
          character.name.toLowerCase().includes(searchDebounced.toLowerCase())
        )
        .slice(0, cardsOnPage)
    }),
    getFavoriteCharacters: builder.query<Characters, string>({
      query: (id) => "characters",
      transformResponse: (responseData: Characters, meta, id) =>
        responseData.filter((el: Character) => el.id === id),
    }),
  }),
});

export const { useGetFavoriteCharactersQuery, useGetCharacterQuery } =
  characterApi;
