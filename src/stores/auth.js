
import { defineStore } from 'pinia'
import api from '@/services/api'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin',
  },

  actions: {
    async login(credentials) {
      this.loading = true
      this.error = null
      
      try {
        // Get CSRF cookie first
        await api.get('/sanctum/csrf-cookie')
        
        const response = await api.post('/auth/login', credentials)
        
        this.token = response.data.token
        this.user = response.data.user
        
        localStorage.setItem('token', this.token)
        
        // Redirect based on role
        if (this.user.role === 'admin') {
          router.push('/admin')
        } else {
          router.push('/dashboard')
        }
        
        return response.data
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao fazer login'
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(userData) {
      this.loading = true
      this.error = null
      
      try {
        await api.get('/sanctum/csrf-cookie')
        
        const response = await api.post('/auth/register', userData)
        
        this.token = response.data.token
        this.user = response.data.user
        
        localStorage.setItem('token', this.token)
        
        router.push('/dashboard')
        
        return response.data
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao registrar'
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchUser() {
      if (!this.token) return
      
      try {
        const response = await api.get('/auth/me')
        this.user = response.data
      } catch (error) {
        this.logout()
      }
    },

    async logout() {
      try {
        if (this.token) {
          await api.post('/auth/logout')
        }
      } catch (error) {
        console.error('Erro ao fazer logout:', error)
      } finally {
        this.user = null
        this.token = null
        localStorage.removeItem('token')
        router.push('/')
      }
    },

    async forgotPassword(email) {
      this.loading = true
      this.error = null
      
      try {
        const response = await api.post('/auth/forgot-password', { email })
        return response.data
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao enviar email'
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
