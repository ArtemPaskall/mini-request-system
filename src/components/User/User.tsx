import styles from "./User.module.css"
import { useState } from "react"
import ModalForm from "../ModalForm/ModalForm"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import RequestColumn from "../RequestColumn/RequestColumn"
import splitRequestsByStatus from "../../utils/splitRequestsByStatus"

export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const request = useSelector((state: RootState) => state.request)

  const { requestsNew, requestsProcess, requestsDone } = splitRequestsByStatus(request)

  return (
    <>
      <div className="container">
        <div className="tab__content">
          <h2 className="tab__header">User</h2>
          <div className="tab__description">&gt;&gt; Tracking your submitted tickets</div>
          <button className={styles.tab__addButton} onClick={() => setIsModalOpen(true)}>
            + NEW REQUEST
          </button>

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

      {isModalOpen && <ModalForm setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
