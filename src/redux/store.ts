import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";

export const store = configureStore({
  reducer: {
    mode: modeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
