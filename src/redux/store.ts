import { configureStore } from "@reduxjs/toolkit";
import { utilsReducer } from "./reducers/utils.slice";

export const store = configureStore({
  reducer: {
    utils: utilsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
