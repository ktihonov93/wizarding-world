import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import historyReducer from "./slices/history";
import { customMiddleWare } from "./services/customMiddleWare";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  history: historyReducer
};
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleWare),
  devTools: true
});
export default store;
