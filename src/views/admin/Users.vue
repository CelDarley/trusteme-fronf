<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Gerenciar Usuários</h1>
      <p class="text-gray-600">Visualize e gerencie todos os usuários do sistema</p>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar usuários..."
            class="input-field"
          />
        </div>
        <div>
          <select v-model="statusFilter" class="input-field">
            <option value="">Todos os status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="suspenso">Suspenso</option>
          </select>
        </div>
        <div>
          <select v-model="roleFilter" class="input-field">
            <option value="">Todas as funções</option>
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Users Table -->
    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="p-6 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-gray-900">
            Usuários ({{ filteredUsers.length }})
          </h2>
          <button @click="showCreateModal = true" class="btn-primary">
            Novo Usuário
          </button>
        </div>
      </div>

      <div v-if="loading" class="p-8">
        <Loader text="Carregando usuários..." />
      </div>

      <div v-else-if="filteredUsers.length === 0" class="p-8 text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
        </svg>
        <p class="text-gray-500">Nenhum usuário encontrado</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuário
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Função
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Criado em
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Logins
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-trust-100 rounded-full flex items-center justify-center mr-4">
                    <span class="text-trust-600 font-semibold text-sm">
                      {{ user.name.charAt(0).toUpperCase() }}
                    </span>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                    <div class="text-sm text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'"
                >
                  {{ user.role === 'admin' ? 'Administrador' : 'Usuário' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getStatusClass(user.status)"
                >
                  {{ user.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ formatDate(user.created_at) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ user.login_count || 0 }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button
                    @click="editUser(user)"
                    class="text-trust-600 hover:text-trust-900"
                  >
                    Editar
                  </button>
                  <button
                    @click="toggleUserStatus(user)"
                    class="text-yellow-600 hover:text-yellow-900"
                  >
                    {{ user.status === 'ativo' ? 'Suspender' : 'Ativar' }}
                  </button>
                  <button
                    @click="deleteUser(user)"
                    class="text-red-600 hover:text-red-900"
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create/Edit User Modal -->
    <Modal :show="showCreateModal || showEditModal" @close="closeModal" title="Usuário">
      <form @submit.prevent="saveUser" class="space-y-4">
        <FormInput
          id="name"
          label="Nome"
          v-model="userForm.name"
          required
          :error="errors.name"
        />
        
        <FormInput
          id="email"
          label="Email"
          type="email"
          v-model="userForm.email"
          required
          :error="errors.email"
        />
        
        <div class="mb-4">
          <label for="role" class="block text-sm font-medium text-gray-700 mb-2">
            Função <span class="text-red-500">*</span>
          </label>
          <select
            id="role"
            v-model="userForm.role"
            required
            class="input-field"
          >
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        
        <div class="mb-4">
          <label for="status" class="block text-sm font-medium text-gray-700 mb-2">
            Status <span class="text-red-500">*</span>
          </label>
          <select
            id="status"
            v-model="userForm.status"
            required
            class="input-field"
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="suspenso">Suspenso</option>
          </select>
        </div>
        
        <FormInput
          v-if="!editingUser"
          id="password"
          label="Senha"
          type="password"
          v-model="userForm.password"
          required
          :error="errors.password"
        />
      </form>
      
      <template #footer>
        <div class="flex justify-end space-x-3">
          <button @click="closeModal" class="btn-secondary">
            Cancelar
          </button>
          <button @click="saveUser" :disabled="saving" class="btn-primary">
            {{ saving ? 'Salvando...' : (editingUser ? 'Atualizar' : 'Criar') }}
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import Loader from '@/components/Loader.vue'
import Modal from '@/components/Modal.vue'
import FormInput from '@/components/FormInput.vue'
import api from '@/services/api'

const users = ref([])
const loading = ref(true)
const saving = ref(false)
const searchQuery = ref('')
const statusFilter = ref('')
const roleFilter = ref('')
const showCreateModal = ref(false)
const showEditModal = ref(false)
const editingUser = ref(null)
const errors = ref({})

const userForm = reactive({
  name: '',
  email: '',
  role: 'user',
  status: 'ativo',
  password: ''
})

const filteredUsers = computed(() => {
  let filtered = users.value
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(user => 
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    )
  }
  
  if (statusFilter.value) {
    filtered = filtered.filter(user => user.status === statusFilter.value)
  }
  
  if (roleFilter.value) {
    filtered = filtered.filter(user => user.role === roleFilter.value)
  }
  
  return filtered
})

const getStatusClass = (status) => {
  const classes = {
    'ativo': 'bg-green-100 text-green-800',
    'inativo': 'bg-gray-100 text-gray-800',
    'suspenso': 'bg-red-100 text-red-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR')
}

const fetchUsers = async () => {
  loading.value = true
  try {
    // Buscar histórico de login
    const loginHistoryResponse = await api.get('/login-history/all')
    const loginHistory = loginHistoryResponse.data.data || loginHistoryResponse.data

    console.log('Histórico de login:', loginHistory) // Debug

    if (loginHistory && loginHistory.length > 0) {
      // Transformar o histórico de login em lista de usuários
      users.value = loginHistory.map(history => {
        const user = history.user || {}
        return {
          id: history.user_id,
          name: user.name || `Usuário ${history.user_id}`,
          email: user.email || `usuario${history.user_id}@exemplo.com`,
          role: user.role || 'user',
          status: 'ativo',
          created_at: history.last_login_at || history.created_at,
          login_count: history.login_count || 1
        }
      })
    } else {
      console.log('Nenhum histórico encontrado')
      users.value = []
    }

    console.log('Usuários processados:', users.value) // Debug

  } catch (error) {
    console.error('Erro ao carregar usuários:', error)
    users.value = []
  } finally {
    loading.value = false
  }
}

const editUser = (user) => {
  editingUser.value = user
  userForm.name = user.name
  userForm.email = user.email
  userForm.role = user.role
  userForm.status = user.status
  userForm.password = ''
  showEditModal.value = true
}

const closeModal = () => {
  showCreateModal.value = false
  showEditModal.value = false
  editingUser.value = null
  Object.keys(userForm).forEach(key => {
    userForm[key] = key === 'role' ? 'user' : key === 'status' ? 'ativo' : ''
  })
  errors.value = {}
}

const saveUser = async () => {
  errors.value = {}
  saving.value = true
  
  try {
    if (editingUser.value) {
      await api.put(`/admin/users/${editingUser.value.id}`, userForm)
    } else {
      await api.post('/admin/users', userForm)
    }
    
    await fetchUsers()
    closeModal()
  } catch (error) {
    console.error('Erro ao salvar usuário:', error)
    if (error.response?.data?.errors) {
      errors.value = error.response.data.errors
    }
  } finally {
    saving.value = false
  }
}

const toggleUserStatus = async (user) => {
  try {
    const newStatus = user.status === 'ativo' ? 'suspenso' : 'ativo'
    await api.put(`/admin/users/${user.id}`, { status: newStatus })
    user.status = newStatus
  } catch (error) {
    console.error('Erro ao alterar status do usuário:', error)
  }
}

const deleteUser = async (user) => {
  if (confirm(`Tem certeza que deseja excluir o usuário ${user.name}?`)) {
    try {
      await api.delete(`/admin/users/${user.id}`)
      await fetchUsers()
    } catch (error) {
      console.error('Erro ao excluir usuário:', error)
    }
  }
}

onMounted(() => {
  fetchUsers()
})
</script>
