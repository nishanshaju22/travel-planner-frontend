import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5001',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// Response interceptor - handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Backend should clear cookie
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

export default api
