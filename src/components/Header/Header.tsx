import styles from "./Header.module.css"
import { useDispatch, useSelector } from "react-redux"
import { toggleMode } from "../../redux/modeSlice"
import { toggleLang } from "../../redux/langSlice"
import { RootState } from "../../redux/store"
import { AppDispatch } from "../../redux/store"
import { useTranslation } from "../../utils/useTranslation"
import DarkThemeIcon from "../../assets/moon.svg"

export default function Header() {
  const dispatch = useDispatch<AppDispatch>()
  const mode = useSelector((state: RootState) => state.mode.mode)
  const lang = useSelector((state: RootState) => state.lang)
  const t = useTranslation()

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <h1 className={styles.header__logo}>{t("logo")}</h1>
          <div className={styles.switcherWrapp}>
            <div className={styles.header__switcherWrapp}>
              <div
                className={`${styles.header__modeTitle} ${lang === "UK" ? styles.activeUser : ""}`}
              >
                <img src={DarkThemeIcon} alt="" className={styles.darkThemeIcon} />
              </div>
              <div
                className={`${styles.header__switcher} ${lang !== "UK" ? styles.header__switcherUser : ""}`}
                onClick={() => dispatch(toggleLang())}
              >
                <div className={styles.header__switcherButton}></div>
              </div>
              <div
                className={`${styles.header__modeTitle} ${lang === "EN" ? styles.activeManager : ""}`}
              >
                EN
              </div>
            </div>
            <div className={styles.header__switcherWrapp}>
              <div
                className={`${styles.header__modeTitle} ${lang === "UK" ? styles.activeUser : ""}`}
              >
                UK
              </div>
              <div
                className={`${styles.header__switcher} ${lang !== "UK" ? styles.header__switcherUser : ""}`}
                onClick={() => dispatch(toggleLang())}
              >
                <div className={styles.header__switcherButton}></div>
              </div>
              <div
                className={`${styles.header__modeTitle} ${lang === "EN" ? styles.activeManager : ""}`}
              >
                EN
              </div>
            </div>
            <div className={styles.header__switcherWrapp}>
              <div
                className={`${styles.header__modeTitle} ${mode === "USER" ? styles.activeUser : ""}`}
              >
                {t("user")}
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
                {t("manager")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
