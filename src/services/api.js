import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { API_CONFIG } from '@/config/api'

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: API_CONFIG.DEFAULT_HEADERS,
  timeout: API_CONFIG.TIMEOUT,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    
    // Lista de rotas públicas que não precisam de token
    const publicRoutes = ['/auth/login', '/auth/register', '/auth/forgot-password', '/auth/reset-password']
    const isPublicRoute = publicRoutes.some(route => config.url.includes(route))
    
    if (token && !isPublicRoute) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    return config
  },
  (error) => {
    console.error('Erro no interceptor de request:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      const url = error.config?.url || ''
      if (url.includes('/auth/me') || url.includes('/auth/login') || url.includes('/auth/register')) {
        authStore.logout()
      }
      // Caso contrário, não fazemos logout automático
    }
    return Promise.reject(error)
  }
)

export default api
