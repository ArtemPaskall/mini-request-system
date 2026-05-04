import styles from "./ModalForm.module.css"
import closeIcon from "../../assets/close.png"
import { useDispatch } from "react-redux"
import { addNewRequest } from "../../redux/requestSlice"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { AppDispatch } from "../../redux/store"
import { useTranslation } from "../../utils/useTranslation"

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
  const t = useTranslation()

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

        <h2 className={styles.modal__header}>{t("modalHeader")}</h2>

        <div className={styles.modal__description}>
          {t("modalDescription")}
        </div>

        <form
          className={styles.modal__form}
          onSubmit={handleSubmit(formHandler)}
        >
          <label htmlFor="title">{t("labelTitle")}</label>
          <input
            {...register("title", {
              required: t("validationEnterTitle"),
              minLength: {
                value: 3,
                message: t("validationMinTitle"),
              },
            })}
            type="text"
            id="title"
          />
          <div className={styles.modal__errorWrapp}>
            {errors.title && <p>&gt;&gt; {errors.title.message}</p>}
          </div>

          <label htmlFor="description">{t("labelDescription")}</label>
          <textarea
            {...register("description", {
              required: t("validationEnterDescription"),
              minLength: {
                value: 5,
                message: t("validationMinDescription"),
              },
              maxLength: {
                value: 200,
                message: t("validationMaxDescription"),
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
            {t("addRequest")}
          </button>
        </form>
      </div>
    </div>
  )
}
