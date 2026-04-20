import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./modeSlice"
import requestSlice from "./requestSlice"

const loadState = () => {
  if (typeof window === "undefined") return undefined

  const data = localStorage.getItem("request")
  return data ? { request: JSON.parse(data) } : undefined
}

export const store = configureStore({
  reducer: {
    mode: modeSlice,
    request: requestSlice,
  },
  preloadedState: loadState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
