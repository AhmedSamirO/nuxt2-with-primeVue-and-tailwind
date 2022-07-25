import { initializeAxios } from "~/utils/axios"
import { COMMON_ERROR } from "~/utils/storeMutations"
import { store } from "~/utils/store"

const interceptors = ({ app, $axios, redirect }) => {
  initializeAxios($axios)
  $axios.onRequest((config) => {})

  $axios.onError((error) => {
    store.commit("common/" + COMMON_ERROR, error)

    return Promise.reject(error)
  })
}

export default interceptors
