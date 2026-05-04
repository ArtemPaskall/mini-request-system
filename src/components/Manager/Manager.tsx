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
  const [activeTab, setActiveTab] = useState<"board" | "logs">("board")

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

          <div className="tab__tabs">
            <button
              className={`tab__tabBtn ${activeTab === "board" ? "tab__tabBtn--active" : ""}`}
              onClick={() => setActiveTab("board")}
            >
              {t("tabBoard")}
            </button>
            <button
              className={`tab__tabBtn ${activeTab === "logs" ? "tab__tabBtn--active" : ""}`}
              onClick={() => setActiveTab("logs")}
            >
              {t("tabLogs")}
            </button>
          </div>

          {activeTab === "board" && (
            <div className="tab__overflowWrapp">
              <div className="tab__requestWrapp">
                <RequestColumn id="NEW" requestsArray={requestsNew} />
                <RequestColumn id="PROCESS" requestsArray={requestsProcess} />
                <RequestColumn id="DONE" requestsArray={requestsDone} />
              </div>
            </div>
          )}

          {activeTab === "logs" && (() => {
            const logs: { role: string; time: number; action: string }[] = JSON.parse(localStorage.getItem("logs") || "[]")
            return (
              <div className="tab__logs">
                {logs.length === 0 ? (
                  <p className="tab__logsEmpty">{t("logEmpty")}</p>
                ) : (
                  <table className="tab__logsTable">
                    <thead>
                      <tr>
                        <th>{t("logRole")}</th>
                        <th>{t("logTime")}</th>
                        <th>{t("logAction")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...logs].reverse().map((log, i) => (
                        <tr key={i}>
                          <td>{log.role}</td>
                          <td>{new Date(log.time).toLocaleString()}</td>
                          <td>{log.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )
          })()}
        </div>
      </div>
    </DndContext>
  )
}
