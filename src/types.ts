export interface ModeType {
  mode: "USER" | "MANAGER"
}

export interface RequestType {
  id: string
  title: string
  description: string
  status: "NEW" | "PROCESS" | "DONE"
  date: number
}
