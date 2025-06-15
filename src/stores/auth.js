import { defineStore } from 'pinia'
import api from '@/services/api'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => {
      console.log('Verificando role do usuário:', state.user)
      return state.user?.user?.role === 'admin'
    },
    getUser: (state) => state.user?.user
  },

  actions: {
    async testAdminLogin() {
      this.loading = true
      this.error = null
      
      try {
        console.log('Testando login admin...')
        this.token = '9|5EzGNVfyjC97u0Rb7G1P1LPcu1SNWMPjU6WnQRjL8c8e889a'
        localStorage.setItem('token', this.token)
        
        console.log('Token armazenado, buscando dados do usuário...')
        await this.fetchUser()
        
        console.log('Usuário carregado:', this.user)
        console.log('É admin?', this.isAdmin)
        
        return true
      } catch (error) {
        console.error('Erro no login admin:', error)
        this.error = error.response?.data?.message || 'Erro ao fazer login'
        return false
      } finally {
        this.loading = false
      }
    },

    async login(credentials) {
      this.loading = true
      this.error = null
      
      try {
        console.log('Iniciando login...')
        const response = await api.post('/auth/login', credentials)
        console.log('Resposta do login:', response.data)
        
        this.token = response.data.token
        localStorage.setItem('token', this.token)
        
        console.log('Token armazenado, buscando dados do usuário...')
        await this.fetchUser()
        
        console.log('Usuário carregado:', this.user)
        console.log('É admin?', this.isAdmin)
        
        return response
      } catch (error) {
        console.error('Erro no login:', error)
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
        const response = await api.post('/auth/register', userData)
        this.token = response.data.token
        localStorage.setItem('token', this.token)
        await this.fetchUser()
        return response
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao registrar'
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchUser() {
      if (!this.token) {
        console.log('Sem token, não é possível buscar usuário')
        return
      }
      
      try {
        console.log('Buscando dados do usuário...')
        const response = await api.get('/auth/me')
        console.log('Dados do usuário recebidos:', response.data)
        this.user = response.data
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error)
        if (error.response?.status === 401) {
          this.logout()
        }
      }
    },

    logout() {
      console.log('Fazendo logout...')
      this.user = null
      this.token = null
      localStorage.removeItem('token')
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
