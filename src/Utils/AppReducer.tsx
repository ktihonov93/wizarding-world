import {
  ADD_CHARACTER_TO_FAVORITES,
  REMOVE_CHARACTER_FROM_FAVORITES,
} from "./CharacterContext";

type stateType = {
  favorites: string[];
};

type actionType = {
  type: string;
  payload: string;
};

export const AppReducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case ADD_CHARACTER_TO_FAVORITES:
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case REMOVE_CHARACTER_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (id) => id !== action.payload
        ),
      };
    default:
      return state;
  }
};
