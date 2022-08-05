import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import historyReducer from "./slices/history";
import { customMiddleWare } from "./services/customMiddleWare";
import { apiSlice } from "./features/api/apiSlice";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  history: historyReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
};
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleWare, apiSlice.middleware),
  devTools: true,
});
export default store;
