import { useDroppable } from "@dnd-kit/core"
import { RequestType } from "../../types"
import RequestCard from "../RequestCard/RequestCard"

export default function RequestColumn({
  id,
  title,
  requestsArray,
}: {
  id: RequestType["status"]
  title: string
  requestsArray: RequestType[]
}) {
  const { setNodeRef } = useDroppable({
    id,
  })

  return (
    <div ref={setNodeRef} className={`tab__${id}`}>
      <div className={`tab__title tab__title${id}`}>{title}</div>
      <div className="tab__columnWrapp">
        {requestsArray.length === 0 ? (
          <div className="tab__emptyColumn">&gt;&gt; No active requests</div>
        ) : (
          requestsArray.map((item) => <RequestCard key={item.id} request={item} />)
        )}
      </div>
    </div>
  )
}
