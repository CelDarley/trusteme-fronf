<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex">
      <!-- Sidebar -->
      <div class="w-64 bg-white shadow-sm">
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-900">Painel Admin</h2>
        </div>
        <nav class="mt-6">
          <div class="px-3">
            <router-link
              to="/admin"
              exact-active-class="bg-trust-50 text-trust-700 border-trust-500"
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
            >
              <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Dashboard
            </router-link>
            
            <router-link
              to="/admin/usuarios"
              active-class="bg-trust-50 text-trust-700 border-trust-500"
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
            >
              <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
              Usuários
            </router-link>
            
            <router-link
              to="/admin/planos"
              active-class="bg-trust-50 text-trust-700 border-trust-500"
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
            >
              <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Planos
            </router-link>
            
            <router-link
              to="/admin/faqs"
              active-class="bg-trust-50 text-trust-700 border-trust-500"
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
            >
              <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQs
            </router-link>
            
            <router-link
              to="/admin/depoimentos"
              active-class="bg-trust-50 text-trust-700 border-trust-500"
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
            >
              <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Depoimentos
            </router-link>
            
            <router-link
              to="/admin/contatos"
              active-class="bg-trust-50 text-trust-700 border-trust-500"
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
            >
              <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contatos
            </router-link>

            <router-link
              to="/admin/contract-types"
              active-class="bg-trust-50 text-trust-700 border-trust-500"
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
            >
              <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Tipos de Contrato
            </router-link>

            <router-link
              to="/admin/selos"
              active-class="bg-trust-50 text-trust-700 border-trust-500"
              class="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-l-4 border-transparent"
            >
              <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Selos
            </router-link>
          </div>
        </nav>
      </div>

      <!-- Main Content -->
      <div class="flex-1">
        <div class="p-8">
          <!-- Admin Dashboard -->
          <div v-if="$route.path === '/admin'">
            <div class="mb-8">
              <h1 class="text-3xl font-bold text-gray-900">Dashboard Administrativo</h1>
              <p class="text-gray-600">Visão geral do sistema</p>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div class="bg-white rounded-lg shadow-sm p-6">
                <div class="flex items-center">
                  <div class="p-2 bg-blue-100 rounded-lg">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">Total de Usuários</p>
                    <p class="text-2xl font-bold text-gray-900">{{ adminStats.totalUsers }}</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm p-6">
                <div class="flex items-center">
                  <div class="p-2 bg-green-100 rounded-lg">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">Assinantes Ativos</p>
                    <p class="text-2xl font-bold text-gray-900">{{ adminStats.activeSubscriptions }}</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm p-6">
                <div class="flex items-center">
                  <div class="p-2 bg-yellow-100 rounded-lg">
                    <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">Mensagens</p>
                    <p class="text-2xl font-bold text-gray-900">{{ adminStats.totalMessages }}</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg shadow-sm p-6">
                <div class="flex items-center">
                  <div class="p-2 bg-purple-100 rounded-lg">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600">Receita Mensal</p>
                    <p class="text-2xl font-bold text-gray-900">R$ {{ adminStats.monthlyRevenue.toLocaleString() }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="grid grid-cols-1 gap-8">
              <div class="bg-white rounded-lg shadow-sm">
                <div class="p-6 border-b border-gray-200">
                  <h2 class="text-lg font-semibold text-gray-900">Usuários e Histórico de Login</h2>
                </div>
                <div class="p-6">
                  <div v-if="loading" class="text-center py-4">
                    <p class="text-gray-500">Carregando dados...</p>
                  </div>
                  <div v-else-if="!recentUsers || recentUsers.length === 0" class="text-center py-4">
                    <p class="text-gray-500">Nenhum usuário encontrado</p>
                  </div>
                  <div v-else class="space-y-4">
                    <div
                      v-for="user in recentUsers"
                      :key="user.id"
                      class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div class="flex items-center">
                        <div class="w-10 h-10 bg-trust-100 rounded-full flex items-center justify-center mr-3">
                          <span class="text-trust-600 font-semibold text-sm">
                            {{ user.name.charAt(0).toUpperCase() }}
                          </span>
                        </div>
                        <div>
                          <p class="font-medium text-gray-900">{{ user.name }}</p>
                          <p class="text-sm text-gray-500">{{ user.email }}</p>
                        </div>
                      </div>
                      <div class="flex items-center space-x-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Logins: {{ user.login_count }}
                        </span>
                        <span class="text-sm text-gray-500">
                          Último login: {{ formatDate(user.created_at) }}
                      </span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-view v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import api from '@/services/api'

const adminStats = reactive({
  totalUsers: 0,
  activeSubscriptions: 0,
  totalMessages: 0,
  monthlyRevenue: 0
})

const recentUsers = ref([])
const loading = ref(false)

const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const fetchAdminStats = async () => {
  loading.value = true
  try {
    // Buscar histórico de login
    const loginHistoryResponse = await api.get('/login-history/all')
    const loginHistory = loginHistoryResponse.data.data || loginHistoryResponse.data

    console.log('Dados brutos do histórico:', loginHistory) // Debug

    if (loginHistory && loginHistory.length > 0) {
      // Transformar o histórico de login em lista de usuários recentes
      const processedUsers = loginHistory.map(history => {
        const user = history.user || {}
        return {
          id: history.user_id,
          name: user.name || `Usuário ${history.user_id}`,
          email: user.email || `usuario${history.user_id}@exemplo.com`,
          role: user.role || 'user',
          created_at: history.last_login_at || history.created_at,
          login_count: history.login_count || 1
        }
      })

      console.log('Usuários processados:', processedUsers) // Debug
      recentUsers.value = processedUsers

      // Atualizar estatísticas
      adminStats.totalUsers = processedUsers.length
      adminStats.activeSubscriptions = processedUsers.length
    } else {
      console.log('Nenhum histórico encontrado, usando dados simulados')
    recentUsers.value = [
      {
        id: 1,
        name: 'João Silva',
          email: 'joao@exemplo.com',
          role: 'user',
          created_at: new Date().toISOString(),
          login_count: 0
      },
      {
        id: 2,
        name: 'Maria Santos',
          email: 'maria@exemplo.com',
          role: 'user',
          created_at: new Date().toISOString(),
          login_count: 0
      },
      {
        id: 3,
          name: 'Pedro Oliveira',
          email: 'pedro@exemplo.com',
          role: 'user',
          created_at: new Date().toISOString(),
          login_count: 0
        }
      ]
    }

  } catch (error) {
    console.error('Erro ao carregar estatísticas:', error)
    recentUsers.value = []
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchAdminStats()
})
</script>
