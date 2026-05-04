export interface ModeType {
  mode: "USER" | "MANAGER"
}

export type Lang = "UK" | "EN"

export type Theme = "DARK" | "LIGHT"

export interface RequestType {
  id: string
  title: string
  description: string
  status: "NEW" | "PROCESS" | "DONE"
  date: number
}
