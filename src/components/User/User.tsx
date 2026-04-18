import "../../styles/tab.css"
import "../../styles/request.css"
import styles from "./User.module.css"
import { useState } from "react"
import ModalForm from "../ModalForm/ModalForm"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

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
            <div className="tab__new">
              <div className="tab__title tab__titleNew">NEW</div>
              <div className="tab__requestWrapp">
                {requestsNew.map((item) => (
                  <div className="request">
                    <div className="request__id">ID: {item.id}</div>
                    <div className="request__title">{item.title}</div>
                    <div className="request__description">
                      {item.description}
                    </div>
                    <div className="request__date">
                      Date: {new Date(item.date).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tab__process">
              <div className="tab__title tab__titleProcess">IN-PROCESS</div>
              <div className="tab__requestWrapp">
                {requestsProcess.map((item) => (
                  <div className="request">
                    <div className="request__id">ID: {item.id}</div>
                    <div className="request__title">{item.title}</div>
                    <div className="request__description">
                      {item.description}
                    </div>
                    <div className="request__date">
                      Date: {new Date(item.date).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tab__done">
              <div className="tab__title tab__titleDone">DONE</div>
              <div className="tab__requestWrapp">
                {requestsDone.map((item) => (
                  <div className="request">
                    <div className="request__id">ID: {item.id}</div>
                    <div className="request__title">{item.title}</div>
                    <div className="request__description">
                      {item.description}
                    </div>
                    <div className="request__date">
                      Date: {new Date(item.date).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <ModalForm setIsModalOpen={setIsModalOpen} />}
    </>
  )
}
