import styles from "./ModalForm.module.css"
import closeIcon from "../../assets/close.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewRequest } from "../../redux/requestSlice"

export default function ModalForm({
  setIsModalOpen,
}: {
  setIsModalOpen: (value: boolean) => void
}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const dispatch = useDispatch()

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title.trim() || !description.trim()) return

    dispatch(
      addNewRequest({
        id: Date.now().toString().slice(-6),
        title,
        description,
        status: "NEW",
        date: Date.now(),
      }),
    )

    setTitle("")
    setDescription("")
    setIsModalOpen(false)
  }

  return (
    <div className={styles.modal__wrapp} onClick={() => setIsModalOpen(false)}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={closeIcon}
          alt="close"
          className={styles.modal__close}
          onClick={() => setIsModalOpen(false)}
        />

        <h2 className={styles.modal__header}>New Request</h2>

        <div className={styles.modal__description}>
          &gt;&gt; Fill in the details below
        </div>

        <form className={styles.modal__form} onSubmit={formHandler}>
          <label htmlFor="title">Request Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" className={styles.modal__button}>
            add request
          </button>
        </form>
      </div>
    </div>
  )
}
