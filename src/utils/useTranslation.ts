import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { UK } from "../translations/UK"
import { EN } from "../translations/EN"

export const useTranslation = () => {
  const lang = useSelector((state: RootState) => state.lang)
  const translations = lang === "UK" ? UK : EN

  return (key: keyof typeof UK) => translations[key]
}
