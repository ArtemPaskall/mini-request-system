import { configureStore, Middleware } from "@reduxjs/toolkit"
import modeSlice from "./modeSlice"
import langSlice from "./langSlice"
import requesSlice from "./requestSlice"
import themeSlice from "./themeSlice"

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.group(`[Action] ${(action as any).type}`)
  console.log("Payload:", (action as any).payload)
  console.log("State before:", store.getState())
  const result = next(action)
  console.log("State after:", store.getState())
  console.groupEnd()
  return result
}

export const store = configureStore({
  reducer: {
    mode: modeSlice,
    request: requesSlice,
    lang: langSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})

store.subscribe(() => {
  localStorage.setItem("request", JSON.stringify(store.getState().request))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
