import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import RequestCard from "../RequestCard/RequestCard"

export default function Manager() {
  const request = useSelector((state: RootState) => state.request)

  const requestsNew = request.filter((item) => item.status === "NEW")
  const requestsProcess = request.filter((item) => item.status === "PROCESS")
  const requestsDone = request.filter((item) => item.status === "DONE")

  return (
    <div className="container">
      <div className="tab__content">
        <h2 className="tab__header">Manager</h2>
        <div className="tab__description">
          &gt;&gt; Managing all incoming requests
        </div>
        <div className="tab__requesWrapp">
          <div className="tab__new">
            <div className="tab__title tab__titleNew">NEW</div>
            <div className="tab__requestWrapp">
              {requestsNew.map((item) => (
                <RequestCard key={item.id} request={item} />
              ))}
            </div>
          </div>
          <div className="tab__process">
            <div className="tab__title tab__titleProcess">IN-PROCESS</div>
            <div className="tab__requestWrapp">
              {requestsProcess.map((item) => (
                <RequestCard key={item.id} request={item} />
              ))}
            </div>
          </div>
          <div className="tab__done">
            <div className="tab__title tab__titleDone">DONE</div>
            <div className="tab__requestWrapp">
              {requestsDone.map((item) => (
                <RequestCard key={item.id} request={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
