import { useDraggable } from "@dnd-kit/core"
import { RequestType } from "../../types"
import "./RequestCard.css"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { RootState } from "../../redux/store"
import deleteIcon from "../../assets/delete.png"
import { deleteRequest } from "../../redux/requestSlice"

export default function RequestCard({ request }: { request: RequestType }) {
  const dispatch = useDispatch<AppDispatch>()
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

  const deleteRequestHandler = () => {
    dispatch(deleteRequest(request.id))
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
      {mode === "MANAGER" && (
        <img
          src={deleteIcon}
          alt="delete"
          className={"request__delete"}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => deleteRequestHandler()}
        />
      )}
    </div>
  )
}
