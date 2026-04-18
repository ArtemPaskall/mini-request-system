import { createSlice } from "@reduxjs/toolkit";
import type { ModeType } from "../types";

const initialState: ModeType = { mode: "USER" };

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "USER" ? "MANAGER" : "USER";
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
