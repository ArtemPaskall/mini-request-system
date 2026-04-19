import styles from "./ModalForm.module.css"
import closeIcon from "../../assets/close.png"
import { useDispatch } from "react-redux"
import { addNewRequest } from "../../redux/requestSlice"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { AppDispatch } from "../../redux/store"

type FormValues = {
  title: string
  description: string
}

export default function ModalForm({
  setIsModalOpen,
}: {
  setIsModalOpen: (value: boolean) => void
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()
  const dispatch = useDispatch<AppDispatch>()

  const formHandler = (data: FormValues) => {
    const title = data.title.trim()
    const description = data.description.trim()

    dispatch(
      addNewRequest({
        id: Date.now().toString().slice(-6),
        title,
        description,
        status: "NEW",
        date: Date.now(),
      }),
    )

    reset()
    setIsModalOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

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

        <form
          className={styles.modal__form}
          onSubmit={handleSubmit(formHandler)}
        >
          <label htmlFor="title">Request Title</label>
          <input
            {...register("title", {
              required: "Enter title",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
            type="text"
            id="title"
          />
          <div className={styles.modal__errorWrapp}>
            {errors.title && <p>&gt;&gt; {errors.title.message}</p>}
          </div>

          <label htmlFor="description">Description</label>
          <textarea
            {...register("description", {
              required: "Enter description",
              minLength: {
                value: 5,
                message: "Minimum 5 characters",
              },
              maxLength: {
                value: 200,
                message: "Maximum 200 characters",
              },
            })}
            id="description"
          />
          <div className={styles.modal__errorWrapp}>
            {errors.description && (
              <p> &gt;&gt; {errors.description.message}</p>
            )}
          </div>

          <button type="submit" className={styles.modal__button}>
            add request
          </button>
        </form>
      </div>
    </div>
  )
}
