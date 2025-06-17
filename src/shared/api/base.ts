import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'

const BASEURL = import.meta.env.VITE_API_URL

interface RetryableRequestConfig extends AxiosRequestConfig {
  _retry?: boolean
}

const api = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config) => {
  const authToken = import.meta.env.VITE_CLIENT_ID
  if (authToken && config.headers) {
    config.headers.Authorization = `Client-ID ${authToken}`
  }
  return config
})

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError) => {
    const status = error.response?.status
    const originalRequest = error.config as RetryableRequestConfig

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      localStorage.removeItem('auth-storage')
      window.location.href = '/'

      return Promise.reject(error)
    }

    // if (status === 403) {
    // }

    // if (status === 404) {
    // }

    return Promise.reject(error)
  }
)

export default api
