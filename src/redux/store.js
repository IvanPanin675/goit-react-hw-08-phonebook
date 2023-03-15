import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

import { rootReducer } from "./root-reducer";

export const store = configureStore({
  auth: authReducer,
  reducer: rootReducer,
});