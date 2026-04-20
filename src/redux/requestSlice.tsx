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
    },
    deleteRequest(state, action: PayloadAction<string>) {
      return state.filter((item) => item.id !== action.payload)
    },
    changeStatus(state, action: PayloadAction<{ id: string; status: RequestType["status"] }>) {
      const itemToChangeStatus = state.find((i) => i.id === action.payload.id)
      if (itemToChangeStatus) {
        itemToChangeStatus.status = action.payload.status
      }
    },
    saveNewTitleValue(state, action: PayloadAction<{ id: string; newTitle: string }>) {
      const editedReques = state.find((item) => item.id === action.payload.id)
      if (editedReques) {
        editedReques.title = action.payload.newTitle
      }
    },
  },
})

export const { addNewRequest, changeStatus, deleteRequest, saveNewTitleValue } =
  requestSlice.actions
export default requestSlice.reducer
