let $axios
const userToken = "tahara_user_token"

function initializeAxios(axiosInstance) {
  $axios = axiosInstance
}

function setHeaderToken() {
  const token = localStorage.getItem(userToken)
  if (token) {
    $axios.setToken(`Bearer ${token}`)
  } else {
    $axios.setToken()
  }
}

function setLang(lang) {
  $axios.setHeader("lang", lang)
}

export { $axios, userToken, initializeAxios, setHeaderToken, setLang }
