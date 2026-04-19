import "../../styles/tab.css"
import styles from "./User.module.css"
import { useState } from "react"
import ModalForm from "../ModalForm/ModalForm"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import RequestCard from "../RequestCard/RequestCard"

export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const request = useSelector((state: RootState) => state.request)

  const requestsNew = request.filter((item) => item.status === "NEW")
  const requestsProcess = request.filter((item) => item.status === "PROCESS")
  const requestsDone = request.filter((item) => item.status === "DONE")

  return (
    <>
      <div className="container">
        <div className="tab__content">
          <h2 className="tab__header">User</h2>
          <div className="tab__description">
            &gt;&gt; Tracking your submitted tickets
          </div>
          <button
            className={styles.tab__addButton}
            onClick={() => setIsModalOpen(true)}
          >
            + NEW REQUEST
          </button>
          <div className="tab__requesWrapp">
            <div className="tab__NEW">
              <div className="tab__title tab__titleNEW">NEW</div>
              <div className="tab__requestWrapp">
                {requestsNew.length === 0 ? (
                  <div className="tab__emptyColumn">
                    &gt;&gt; No active requests
                  </div>
                ) : (
                  requestsNew.map((item) => (
                    <RequestCard key={item.id} request={item} />
                  ))
                )}
              </div>
            </div>
            <div className="tab__PROCESS">
              <div className="tab__title tab__titlePROCESS">IN-PROCESS</div>
              <div className="tab__requestWrapp">
                {requestsProcess.length === 0 ? (
                  <div className="tab__emptyColumn">
                    &gt;&gt; No active requests
                  </div>
                ) : (
                  requestsProcess.map((item) => (
                    <RequestCard key={item.id} request={item} />
                  ))
                )}
              </div>
            </div>
            <div className="tab__DONE">
              <div className="tab__title tab__titleDONE">DONE</div>
              <div className="tab__requestWrapp">
                {requestsDone.length === 0 ? (
                  <div className="tab__emptyColumn">
                    &gt;&gt; No active requests
                  </div>
                ) : (
                  requestsDone.map((item) => (
                    <RequestCard key={item.id} request={item} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <ModalForm setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
