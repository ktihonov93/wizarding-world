import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
//import { useSelector } from "react-redux";
import { setMessage } from "./message";
//import store from '../store';
import AuthService from "../services/auth.service";
//const {user} = () => useSelector((state) => state.auth);
//мне кажется user = null после рефреша страницы профиля происходит
// из-за строки 10 и 59. Попытался решить эту проблему дергая user
// из стора, но useSelector ругается, что dispatcher is null.
// Этот код закомментил на 5й строке.

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    return await AuthService.register(username, email, password)
      .then((response) => {
        thunkAPI.dispatch(
          setMessage("Registration was successful! Please log in!")
        );
        return response;
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      });
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      let parsedData = JSON.parse(data);

      if (data && password === parsedData.password) return { user: parsedData };

      throw new Error("Correct your data or Sign up");
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
export const logout = createAction('auth/logout');

const user = null; //store ? store.getState().auth : null
let initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

console.log("initialState", initialState);
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
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const { reducer } = authSlice;
export default reducer;
