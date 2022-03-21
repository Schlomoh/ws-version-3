import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./contentSlice";
import cookieSlice from "./cookieSlice";

const store = configureStore({
  reducer: {
    pageContent: contentSlice,
    cookies: cookieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
