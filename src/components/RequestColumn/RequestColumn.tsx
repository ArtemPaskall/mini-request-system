import { useDroppable } from "@dnd-kit/core"
import { ReactNode } from "react"
import { RequestType } from "../../types"
import RequestCard from "../RequestCard/RequestCard"

export default function RequestColumn({
  id,
  title,
  children,
}: {
  id: RequestType["status"]
  title: string
  children: ReactNode
}) {
  const { setNodeRef } = useDroppable({
    id,
  })

  return (
    <div ref={setNodeRef} className={`tab__${id}`}>
      <div className={`tab__title tab__title${id}`}>{title}</div>
      <div className="tab__columnWrapp">{children}</div>
    </div>
  )
}
