import styles from "./Header.module.css"
import { useDispatch, useSelector } from "react-redux"
import { toggleMode } from "../../redux/modeSlice"
import { RootState } from "../../redux/store"
import { AppDispatch } from "../../redux/store"

export default function Header() {
  const dispatch = useDispatch<AppDispatch>()
  const mode = useSelector((state: RootState) => state.mode.mode)

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <h1 className={styles.header__logo}>MINI REQUEST SYSTEM</h1>
          <div className={styles.header__switcherWrapp}>
            <div
              className={`${styles.header__modeTitle} ${mode === "USER" ? styles.activeUser : ""}`}
            >
              User
            </div>
            <div
              className={`${styles.header__switcher} ${mode !== "USER" ? styles.header__switcherUser : ""}`}
              onClick={() => dispatch(toggleMode())}
            >
              <div className={styles.header__switcherButton}></div>
            </div>
            <div
              className={`${styles.header__modeTitle} ${mode === "MANAGER" ? styles.activeManager : ""}`}
            >
              Manager
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
