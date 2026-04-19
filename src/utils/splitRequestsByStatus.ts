import { RequestType } from "../types"

export default function splitRequestsByStatus(requestsArray: RequestType[]) {
  return {
    requestsNew: requestsArray.filter((item) => item.status === "NEW"),
    requestsProcess: requestsArray.filter((item) => item.status === "PROCESS"),
    requestsDone: requestsArray.filter((item) => item.status === "DONE"),
  }
}
