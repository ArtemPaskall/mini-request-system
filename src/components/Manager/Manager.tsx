import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { RootState } from "../../redux/store"
import RequestCard from "../RequestCard/RequestCard"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import RequestColumn from "../RequestColumn/RequestColumn"
import { changeStatus } from "../../redux/requestSlice"
import { RequestType } from "../../types"

export default function Manager() {
  const request = useSelector((state: RootState) => state.request)
  const dispatch = useDispatch<AppDispatch>()

  const requestsNew = request.filter((item) => item.status === "NEW")
  const requestsProcess = request.filter((item) => item.status === "PROCESS")
  const requestsDone = request.filter((item) => item.status === "DONE")

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
          <div className="tab__description">
            &gt;&gt; Managing all incoming requests
          </div>
          <div className="tab__requestWrapp">
            <RequestColumn id="NEW" title="NEW">
              {requestsNew.length === 0 ? (
                <div className="tab__emptyColumn">
                  &gt;&gt; No active requests
                </div>
              ) : (
                requestsNew.map((item) => (
                  <RequestCard key={item.id} request={item} />
                ))
              )}
            </RequestColumn>
            <RequestColumn id="PROCESS" title="IN-PROCESS">
              {requestsProcess.length === 0 ? (
                <div className="tab__emptyColumn">
                  &gt;&gt; No active requests
                </div>
              ) : (
                requestsProcess.map((item) => (
                  <RequestCard key={item.id} request={item} />
                ))
              )}
            </RequestColumn>
            <RequestColumn id="DONE" title="DONE">
              {requestsDone.length === 0 ? (
                <div className="tab__emptyColumn">
                  &gt;&gt; No active requests
                </div>
              ) : (
                requestsDone.map((item) => (
                  <RequestCard key={item.id} request={item} />
                ))
              )}
            </RequestColumn>
          </div>
        </div>
      </div>
    </DndContext>
  )
}
