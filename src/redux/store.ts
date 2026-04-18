import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./modeSlice"
import requesSlice from "./requestSlice"

export const store = configureStore({
  reducer: {
    mode: modeSlice,
    request: requesSlice,
  },
})

store.subscribe(() => {
  localStorage.setItem("request", JSON.stringify(store.getState().request))
})

export type RootState = ReturnType<typeof store.getState>
