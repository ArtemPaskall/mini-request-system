import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./modeSlice"
import requesSlice from "./requestSlice"

export const store = configureStore({
  reducer: {
    mode: modeSlice,
    request: requesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
