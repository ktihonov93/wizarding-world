import {
  ADD_CHARACTER_TO_FAVORITES,
  REMOVE_CHARACTER_FROM_FAVORITES,
} from "./CharacterContext";

type stateType = {
  favorites: { name: string }[];
};

type actionType = {
  type: string;
  payload: any;
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
          (p) => p.name !== action.payload
        ),
      };
    default:
      return state;
  }
};
