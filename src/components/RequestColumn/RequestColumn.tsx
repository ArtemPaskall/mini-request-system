import { useDroppable } from "@dnd-kit/core"
import { ReactNode } from "react"
import { RequestType } from "../../types"

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
      <div className="tab__requestWrapp">{children}</div>
    </div>
  )
}
