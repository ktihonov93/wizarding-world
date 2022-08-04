import { createSlice, createAction } from "@reduxjs/toolkit";

/*export const history = createAsyncThunk("history", async (value, thunkAPI) => {
  return value;
});*/

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
      console.log(action.payload)
      state.history = [...state.history, action.payload];
      console.log(state.history);
    },
    historyItem: (state, action) => {
      console.log(action)
      state.historyItem = action.payload;
      console.log(state.historyItem);
    },
  },
});
const { reducer } = authSlice;
export default reducer;
