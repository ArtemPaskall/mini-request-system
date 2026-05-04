import { configureStore, Middleware } from "@reduxjs/toolkit"
import modeSlice from "./modeSlice"
import langSlice from "./langSlice"
import requesSlice from "./requestSlice"
import themeSlice from "./themeSlice"

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action)
  const type = (action as { type: string }).type
  const role = store.getState().mode.mode as "USER" | "MANAGER"
  const logs = JSON.parse(localStorage.getItem("logs") || "[]")
  logs.push({ role, time: Date.now(), action: type })
  localStorage.setItem("logs", JSON.stringify(logs))
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
