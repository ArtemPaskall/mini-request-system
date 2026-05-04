import { useDroppable } from "@dnd-kit/core"
import { RequestType } from "../../types"
import RequestCard from "../RequestCard/RequestCard"
import { useState } from "react"
import styles from "./RequestColumn.module.css"
import { useTranslation } from "../../utils/useTranslation"

type SortType = "OLD" | "NEW" | ""

const statusTitleKey: Record<RequestType["status"], "statusNew" | "statusProcess" | "statusDone"> =
  {
    NEW: "statusNew",
    PROCESS: "statusProcess",
    DONE: "statusDone",
  }

export default function RequestColumn({
  id,
  requestsArray,
}: {
  id: RequestType["status"]
  requestsArray: RequestType[]
}) {
  const t = useTranslation()
  const [sort, setSort] = useState<SortType>("")
  const { setNodeRef } = useDroppable({
    id,
  })

  const sortedArray =
    sort === ""
      ? requestsArray
      : [...requestsArray].sort((a, b) => (sort === "OLD" ? a.date - b.date : b.date - a.date))

  return (
    <div ref={setNodeRef} className={`tab__${id}`}>
      <div className={"tab__titleWrapp"}>
        <div className={`tab__title tab__title${id}`}>{t(statusTitleKey[id])}</div>
        <select
          className={styles.sortSelect}
          value={sort}
          onChange={(e) => setSort(e.target.value as SortType)}
        >
          <option disabled hidden value="">
            {t("sortByDate")}
          </option>
          <option value="OLD">{t("sortOld")}</option>
          <option value="NEW">{t("sortNew")}</option>
        </select>
      </div>

      <div className="tab__columnWrapp">
        {sortedArray.length === 0 ? (
          <div className="tab__emptyColumn">{t("emptyColumn")}</div>
        ) : (
          sortedArray.map((item) => <RequestCard key={item.id} request={item} />)
        )}
      </div>
    </div>
  )
}
