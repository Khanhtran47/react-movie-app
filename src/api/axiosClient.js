import axios from "axios"
import queryString from "query-string"

import apiConfig from "./apiConfig"

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({
      ...params,
      api_key: process.env.REACT_APP_MOVIE_API_KEY,
    }),
})

axiosClient.interceptors.request.use(async (config) => config)

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    throw error
  }
)

export default axiosClient
