import { createSlice, createAction } from "@reduxjs/toolkit";

/*export const history = createAsyncThunk("history", async (value, thunkAPI) => {
  return value;
});*/

export const history = createAction("history", function (text) {
  return {
    payload: text,
  };
});

let initialState = [];

const authSlice = createSlice({
  name: "history",
  initialState,
  extraReducers: {
    [history]: (state, action) => {
        console.log(state)
      state = state.push(action.payload);
      console.log("state");
    },
  },
});
const { reducer } = authSlice;
export default reducer;
