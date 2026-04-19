import styles from "./SearchByTitle.module.css"

export default function SearchByTitle({
  search,
  setSearch,
}: {
  search: string
  setSearch: (value: string) => void
}) {
  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="Search by Title"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </>
  )
}
