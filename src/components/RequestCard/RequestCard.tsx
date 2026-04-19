import { RequestType } from "../../types"
import styles from "./Request.module.css"

export default function RequestCard({ request }: { request: RequestType }) {
  return (
    <div className={styles.request}>
      <div className={styles.request__id}>ID: {request.id}</div>
      <div className={styles.request__title}>{request.title}</div>
      <div className={styles.request__description}>{request.description}</div>
      <div className={styles.request__date}>
        Date: {new Date(request.date).toLocaleString()}
      </div>
    </div>
  )
}
