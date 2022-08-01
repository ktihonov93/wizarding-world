import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { useSelector } from "react-redux";
import { setMessage } from "./message";
import AuthService from "../services/auth.service";
//const getUser = () => useDispatch && useSelector((state) => state.auth);
//мне кажется user = null после рефреша страницы профиля происходит
// из-за строки 10 и 59. Попытался решить эту проблему дергая user
// из стора, но useSelector ругается, что dispatcher is null.
// Этот код закомментил на 5й строке.
const user = JSON.parse(localStorage.getItem("user"));
export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password);
      console.log("prev state", thunkAPI.getState());
      thunkAPI.dispatch(setMessage(response.message));
      console.log("next state", thunkAPI.getState());
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      console.log("data", data);
      /*thunkAPI.dispatch({
        type: "auth/login/fulfilled",
        payload: { user: data }
      });*/
      console.log("next state", thunkAPI.getState());
      return { user: data }//.user ? data : new Error("Correct your data or Sign up");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      console.log("fulfilled ");
      state.isLoggedIn = true;
      state.user = action.payload.user;
      console.log("login.fulfilled", action);
    },
    [login.rejected]: (state, action) => {
      console.log("rejected ");
      console.log(login);
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
});
const { reducer } = authSlice;
export default reducer;
