import {
  COMMON_REQUEST,
  COMMON_SUCCESS,
  COMMON_ERROR,
  SET_FAQS,
} from "~/utils/storeMutations"

import { GET_FAQS } from "~/utils/storeActions"

import { $axios, setHeaderToken } from "~/utils/axios"
import { i18n } from "~/utils/i18n"

export default {
  namespaced: true,

  state: {
    status: "",
    errorMsg: {
      message: "",
      list: [],
    },
    successMsg: "",
    errorStatus: "",
    requestType: "",
    successStatus: "",
    faqs: [],
  },
  getters: {
    faqs: (state) => {
      return state.faqs
    },
  },
  mutations: {
    [COMMON_REQUEST]: (state) => {
      state.status = "loading"
      state.errorMsg = {
        message: "",
        list: [],
      }
      state.successMsg = ""
      state.errorStatus = ""
      state.successStatus = ""
    },
    [COMMON_SUCCESS]: (state, payload) => {
      state.successMsg = i18n.t("shared.done")
      state.errorMsg = {
        message: "",
        list: [],
      }
      state.errorStatus = ""
      state.requestType = payload.type
      state.successStatus = payload.code
      state.status = "success"
    },
    [COMMON_ERROR]: (state, err) => {
      state.successStatus = ""
      state.errorMsg = { message: "", list: [] }

      if (err?.response?.status) state.errorStatus = err.response.status

      if (err?.response?.data?.message) {
        state.errorMsg.message = err.response.data.message
      } else if (err?.response?.data && typeof err.response.data === "string") {
        state.errorMsg.message = err.response.data
      }

      if (err?.response?.data?.errors) {
        Object.keys(err.response.data.errors).forEach(function (field) {
          const errorLine = err.response.data.errors[field]
          if (Array.isArray(errorLine)) {
            state.errorMsg.list.push(errorLine.join("\n"))
          } else {
            state.errorMsg.list.push(errorLine)
          }
        })
      }

      if (state.errorStatus === 401) {
        setHeaderToken()
      }
      state.status = "error"
    },
    [SET_FAQS]: (state, faqs) => {
      state.faqs = faqs
    },
  },
  actions: {
    [GET_FAQS]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        commit(COMMON_REQUEST)
        $axios.get("faqs").then((response) => {
          commit(COMMON_SUCCESS, {
            type: "get",
            status: response.status,
          })
          commit(SET_FAQS, response.data.data.faqs)
          resolve(response.data)
        })
      })
    },
  },
}
