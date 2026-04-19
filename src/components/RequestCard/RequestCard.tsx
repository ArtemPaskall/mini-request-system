import { useDraggable } from "@dnd-kit/core"
import { RequestType } from "../../types"
import "./Request.css"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

export default function RequestCard({ request }: { request: RequestType }) {
  const mode = useSelector((state: RootState) => state.mode.mode)
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: request.id,
  })

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: `${mode === "USER" ? "default" : "grab"}`,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="request"
    >
      <div className={"request__id"}>ID: {request.id}</div>
      <div className={"request__title"}>{request.title}</div>
      <div className={"request__description"}>{request.description}</div>
      <div className={"request__date"}>
        Date: {new Date(request.date).toLocaleString()}
      </div>
    </div>
  )
}
