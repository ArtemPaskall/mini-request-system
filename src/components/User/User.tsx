import styles from "./User.module.css"
import { useState } from "react"
import ModalForm from "../ModalForm/ModalForm"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import RequestColumn from "../RequestColumn/RequestColumn"
import splitRequestsByStatus from "../../utils/splitRequestsByStatus"
import SearchByTitle from "../SearchByTitle/SearchByTitle"
import { useTranslation } from "../../utils/useTranslation"

export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const request = useSelector((state: RootState) => state.request)
  const [search, setSearch] = useState("")
  const t = useTranslation()

  const filteredRequests = request.filter((item) =>
    item.title.toLowerCase().startsWith(search.toLowerCase()),
  )

  const { requestsNew, requestsProcess, requestsDone } = splitRequestsByStatus(filteredRequests)

  return (
    <>
      <div className="container">
        <div className="tab__content">
          <div className="tab__searchWrapp">
            <h2 className="tab__header">{t("user")}</h2>
            <SearchByTitle search={search} setSearch={setSearch} />
          </div>
          <div className="tab__description">{t("userDescription")}</div>
          <button className={styles.tab__addButton} onClick={() => setIsModalOpen(true)}>
            {t("newRequest")}
          </button>

          <div className="tab__overflowWrapp">
            <div className="tab__requestWrapp">
              <RequestColumn id="NEW" requestsArray={requestsNew}></RequestColumn>
              <RequestColumn id="PROCESS" requestsArray={requestsProcess}></RequestColumn>
              <RequestColumn id="DONE" requestsArray={requestsDone}></RequestColumn>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <ModalForm setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
