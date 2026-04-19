import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { RootState } from "../../redux/store"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import RequestColumn from "../RequestColumn/RequestColumn"
import { changeStatus } from "../../redux/requestSlice"
import { RequestType } from "../../types"
import splitRequestsByStatus from "../../utils/splitRequestsByStatus"

export default function Manager() {
  const request = useSelector((state: RootState) => state.request)
  const dispatch = useDispatch<AppDispatch>()

  const { requestsNew, requestsProcess, requestsDone } = splitRequestsByStatus(request)

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return

    dispatch(
      changeStatus({
        id: String(active.id),
        status: over.id as RequestType["status"],
      }),
    )
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="container">
        <div className="tab__content">
          <h2 className="tab__header">Manager</h2>
          <div className="tab__description">&gt;&gt; Managing all incoming requests</div>
          <div className="tab__requestWrapp">
            <RequestColumn id="NEW" title="NEW" requestsArray={requestsNew}></RequestColumn>
            <RequestColumn
              id="PROCESS"
              title="IN-PROCESS"
              requestsArray={requestsProcess}
            ></RequestColumn>
            <RequestColumn id="DONE" title="DONE" requestsArray={requestsDone}></RequestColumn>
          </div>
        </div>
      </div>
    </DndContext>
  )
}
