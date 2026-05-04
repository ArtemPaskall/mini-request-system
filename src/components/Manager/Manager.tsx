import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { RootState } from "../../redux/store"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import RequestColumn from "../RequestColumn/RequestColumn"
import { changeStatus } from "../../redux/requestSlice"
import { RequestType } from "../../types"
import splitRequestsByStatus from "../../utils/splitRequestsByStatus"
import SearchByTitle from "../SearchByTitle/SearchByTitle"
import { useState } from "react"
import { useTranslation } from "../../utils/useTranslation"

export default function Manager() {
  const request = useSelector((state: RootState) => state.request)
  const dispatch = useDispatch<AppDispatch>()
  const t = useTranslation()
  const [search, setSearch] = useState("")

  const filteredRequests = request.filter((item) =>
    item.title.toLowerCase().startsWith(search.toLowerCase()),
  )

  const { requestsNew, requestsProcess, requestsDone } = splitRequestsByStatus(filteredRequests)

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
          <div className="tab__searchWrapp">
            <h2 className="tab__header">{t("manager")}</h2>
            <SearchByTitle search={search} setSearch={setSearch} />
          </div>
          <div className="tab__description">{t("managerDescription")}</div>

          <div className="tab__overflowWrapp">
            <div className="tab__requestWrapp">
              <RequestColumn id="NEW" requestsArray={requestsNew} />
              <RequestColumn id="PROCESS" requestsArray={requestsProcess} />
              <RequestColumn id="DONE" requestsArray={requestsDone} />
            </div>
          </div>
        </div>
      </div>
    </DndContext>
  )
}
