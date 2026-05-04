import { createSlice } from "@reduxjs/toolkit"
import type { Lang } from "../types"

const loadLang = (): Lang => {
  const saved = localStorage.getItem("lang")
  if (saved === "EN" || saved === "UK") return saved
  const browserLang = navigator.language || navigator.languages?.[0] || ""
  return browserLang.toLowerCase().startsWith("uk") ? "UK" : "EN"
}

const initialState: Lang = loadLang()

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang: (state) => {
      const changedValue = state === "UK" ? "EN" : "UK"
      localStorage.setItem("lang", changedValue)
      return changedValue
    },
  },
})

export const { toggleLang } = langSlice.actions
export default langSlice.reducer
