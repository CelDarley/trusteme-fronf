import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 segundos de timeout
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    console.log('Token no interceptor:', token)
    console.log('URL completa:', `${config.baseURL}${config.url}`)
    
    // Lista de rotas públicas que não precisam de token
    const publicRoutes = ['/auth/login', '/auth/register', '/auth/forgot-password', '/auth/reset-password']
    const isPublicRoute = publicRoutes.some(route => config.url.includes(route))
    
    if (token && !isPublicRoute) {
      console.log('Adicionando token ao header:', token)
      config.headers.Authorization = `Bearer ${token}`
      console.log('Headers completos:', config.headers)
    } else if (isPublicRoute) {
      console.log('Rota pública detectada, não adicionando token')
    }
    
    console.log('Request config:', {
      method: config.method,
      url: config.url,
      baseURL: config.baseURL,
      headers: config.headers,
      data: config.data
    })
    
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
    console.log('Response:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    })
    return response
  },
  (error) => {
    console.error('Response Error:', {
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      headers: error.config?.headers
    })
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
