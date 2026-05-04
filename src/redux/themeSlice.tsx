import { createSlice } from "@reduxjs/toolkit"
import type { Theme } from "../types"

const loadTheme = (): Theme => {
  const saved = localStorage.getItem("theme")
  if (saved === "DARK" || saved === "LIGHT") return saved

  return "DARK"
}

const initialState: Theme = loadTheme()

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const changedValue = state === "DARK" ? "LIGHT" : "DARK"
      localStorage.setItem("theme", changedValue)
      return changedValue
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
