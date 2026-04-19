import { useDroppable } from "@dnd-kit/core"
import { RequestType } from "../../types"
import RequestCard from "../RequestCard/RequestCard"
import { useState } from "react"
import styles from "./RequestColumn.module.css"

type SortType = "OLD" | "NEW" | ""

export default function RequestColumn({
  id,
  title,
  requestsArray,
}: {
  id: RequestType["status"]
  title: string
  requestsArray: RequestType[]
}) {
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
        <div className={`tab__title tab__title${id}`}>{title}</div>
        <select
          className={styles.sortSelect}
          value={sort}
          onChange={(e) => setSort(e.target.value as SortType)}
        >
          <option disabled hidden value="">
            Sort by date
          </option>
          <option value="OLD">First old</option>
          <option value="NEW">First new</option>
        </select>
      </div>

      <div className="tab__columnWrapp">
        {sortedArray.length === 0 ? (
          <div className="tab__emptyColumn">&gt;&gt; No active requests</div>
        ) : (
          sortedArray.map((item) => <RequestCard key={item.id} request={item} />)
        )}
      </div>
    </div>
  )
}
