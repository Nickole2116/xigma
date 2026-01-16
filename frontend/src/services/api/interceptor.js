import http from './http'
import { handleError } from './error-handler'

export const setupInterceptors = () => {
  http.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access_token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => Promise.reject(error)
  )

  http.interceptors.response.use(
    (response) => response.data,
    (error) => handleError(error)
  )
}
