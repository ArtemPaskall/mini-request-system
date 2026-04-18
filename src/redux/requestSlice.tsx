import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RequestType } from "../types"

const loadState = (): RequestType[] => {
  if (typeof window === "undefined") return []

  const data = localStorage.getItem("request")
  return data ? JSON.parse(data) : []
}

const initialState: RequestType[] = loadState()

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    addNewRequest(state, action: PayloadAction<RequestType>) {
      state.push(action.payload)
      localStorage.setItem("request", JSON.stringify(state))
    },
  },
})

export const { addNewRequest } = requestSlice.actions
export default requestSlice.reducer
