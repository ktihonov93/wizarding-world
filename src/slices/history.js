import { createSlice, createAction } from "@reduxjs/toolkit";

export const history = createAction("history", function (text) {
  return {
    payload: text,
  };
});

export const historyItem = createAction("historyItem", function (text) {
  return {
    payload: text,
  };
});

let initialState = {
  history: [],
  historyItem: "",
};

const authSlice = createSlice({
  name: "history",
  initialState,
  extraReducers: {
    history: (state, action) => {
      state.history = [...state.history, action.payload];
    },
    historyItem: (state, action) => {
      state.historyItem = action.payload;
    },
  },
});
const { reducer } = authSlice;
export default reducer;
