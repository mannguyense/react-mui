import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product";
import authReducer from "./reducers/auth";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});
