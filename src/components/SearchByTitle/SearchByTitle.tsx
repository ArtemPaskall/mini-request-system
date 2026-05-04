import styles from "./SearchByTitle.module.css"
import { useTranslation } from "../../utils/useTranslation"

export default function SearchByTitle({
  search,
  setSearch,
}: {
  search: string
  setSearch: (value: string) => void
}) {
  const t = useTranslation()

  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder={t("searchByTitle")}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </>
  )
}
