import { RequestType } from "../../types"
import "./request.css"

export default function RequestCard({ request }: { request: RequestType }) {
  return (
    <div className="request">
      <div className="request__id">ID: {request.id}</div>
      <div className="request__title">{request.title}</div>
      <div className="request__description">{request.description}</div>
      <div className="request__date">
        Date: {new Date(request.date).toLocaleString()}
      </div>
    </div>
  )
}
