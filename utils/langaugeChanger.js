import { setLang } from "~/utils/axios"

const handleLanguageChange = (app, lang) => {
  if (localStorage) {
    localStorage.setItem("lang", lang)
  }
  if (app) {
    setLang(lang)
    app.$i18n.setLocale(lang)
    app.$nuxt.refresh()
  }
  if (typeof document !== "undefined") {
    document.querySelector("html").setAttribute("lang", lang)
    document
      .querySelector("html")
      .setAttribute("dir", lang === "ar" ? "rtl" : "ltr")
  }
}
export { handleLanguageChange }
