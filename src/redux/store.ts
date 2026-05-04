import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./modeSlice"
import langSlice from "./langSlice"
import requesSlice from "./requestSlice"

export const store = configureStore({
  reducer: {
    mode: modeSlice,
    request: requesSlice,
    lang: langSlice,
  },
})

store.subscribe(() => {
  localStorage.setItem("request", JSON.stringify(store.getState().request))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
