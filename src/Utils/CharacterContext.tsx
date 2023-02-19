import { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

export let ADD_CHARACTER_TO_FAVORITES = "ADD_CHARACTER_TO_FAVORITES";
export let REMOVE_CHARACTER_FROM_FAVORITES = "REMOVE_CHARACTER_FROM_FAVORITES";

const favoritesFromStorage = localStorage.getItem("favorites");

const initialState = {
  favorites: favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [],
};

type AppProps = {
  favorites: any[];
  addCharacterToFavorites: Function;
  removeCharacterFromFavorites: Function;
};

export const CharacterContext = createContext(initialState as AppProps);

export const CharacterProvider = (props: { children: any }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state]);

  const addCharacterToFavorites = (id: string ) => {
    dispatch({ type: ADD_CHARACTER_TO_FAVORITES, payload: id });
  };

  const removeCharacterFromFavorites = (id: string) => {
    dispatch({ type: REMOVE_CHARACTER_FROM_FAVORITES, payload: id });
  };

  return (
    <CharacterContext.Provider
      value={{
        favorites: state.favorites,
        addCharacterToFavorites,
        removeCharacterFromFavorites,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
