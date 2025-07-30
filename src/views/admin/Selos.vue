<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Selos</h1>
      <p class="text-gray-600">Gerencie os selos disponíveis no sistema</p>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar por código ou descrição..."
            class="input-field"
          />
        </div>
        <div class="flex justify-end">
          <button @click="showCreateModal = true" class="btn-primary">
            Novo Selo
          </button>
        </div>
      </div>
    </div>

    <!-- Selos Table -->
    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="p-6 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold text-gray-900">
            Selos ({{ selos.length }})
          </h2>
        </div>
      </div>

      <div v-if="loading" class="p-8">
        <Loader text="Carregando selos..." />
      </div>

      <div v-else-if="selos.length === 0" class="p-8 text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
        <p class="text-gray-500">Nenhum selo encontrado</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Código
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descrição
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="selo in filteredSelos" :key="selo.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{{ selo.codigo }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">{{ selo.descricao }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    selo.ativo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  ]"
                >
                  {{ selo.ativo ? 'Ativo' : 'Inativo' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button
                    @click="editSelo(selo)"
                    class="text-trust-600 hover:text-trust-900"
                  >
                    Editar
                  </button>
                  <button
                    @click="deleteSelo(selo)"
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

    <!-- Create/Edit Modal -->
    <Modal :show="showCreateModal || showEditModal" @close="closeModal" :title="modalTitle">
      <form @submit.prevent="saveSelo" class="space-y-4">
        <div>
          <FormInput
            v-model="seloForm.codigo"
            label="Código"
            type="text"
            required
            :error="errors.codigo"
          />
        </div>
        <div>
          <FormInput
            v-model="seloForm.descricao"
            label="Descrição"
            type="text"
            required
            :error="errors.descricao"
          />
        </div>
        <div>
          <FormInput
            v-model="seloForm.validade"
            label="Validade"
            type="text"
            required
            :error="errors.validade"
          />
        </div>
        <div>
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="seloForm.ativo"
              class="form-checkbox h-4 w-4 text-trust-600"
            >
            <span class="ml-2 text-sm text-gray-700">Ativo</span>
          </label>
        </div>
        <div class="flex justify-end space-x-3">
          <button
            type="button"
            @click="closeModal"
            class="btn-secondary"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="btn-primary"
            :disabled="saving"
          >
            {{ saving ? 'Salvando...' : 'Salvar' }}
          </button>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import Loader from '@/components/Loader.vue'
import Modal from '@/components/Modal.vue'
import FormInput from '@/components/FormInput.vue'
import api from '@/services/api'

const selos = ref([])
const loading = ref(true)
const saving = ref(false)
const searchQuery = ref('')
const showCreateModal = ref(false)
const showEditModal = ref(false)
const editingSelo = ref(null)
const errors = ref({})

const seloForm = reactive({
  codigo: '',
  descricao: '',
  ativo: true,
  validade: ''
})

const modalTitle = computed(() => {
  return showEditModal.value ? 'Editar Selo' : 'Novo Selo'
})

const filteredSelos = computed(() => {
  if (!searchQuery.value) return selos.value
  
  const query = searchQuery.value.toLowerCase()
  return selos.value.filter(selo => 
    selo.codigo.toLowerCase().includes(query) ||
    selo.descricao.toLowerCase().includes(query)
  )
})

const fetchSelos = async () => {
  loading.value = true
  try {
    const params = {}
    if (searchQuery.value) {
      // Se a busca contiver apenas números, assume que é um código
      if (/^\d+$/.test(searchQuery.value)) {
        params.codigo = searchQuery.value
      } else {
        params.descricao = searchQuery.value
      }
    }
    
    const response = await api.get('/selos', { params })
    selos.value = response.data.data || response.data
  } catch (error) {
    console.error('Erro ao carregar selos:', error)
    selos.value = []
  } finally {
    loading.value = false
  }
}

const editSelo = async (selo) => {
  try {
    console.log('Carregando dados do selo:', selo.id)
    const response = await api.get(`/selos/${selo.id}`)
    const seloData = response.data.data || response.data
    console.log('Dados do selo carregados:', seloData)
    
    editingSelo.value = seloData
    seloForm.codigo = String(seloData.codigo).trim()
    seloForm.descricao = seloData.descricao.trim()
    seloForm.ativo = Boolean(seloData.ativo)
    seloForm.validade = seloData.validade ? String(seloData.validade) : ''
    showEditModal.value = true
  } catch (error) {
    console.error('Erro ao carregar dados do selo:', error)
    console.error('Dados do erro:', error.response?.data)
    if (error.response?.data?.message) {
      alert(error.response.data.message)
    } else {
      alert('Erro ao carregar dados do selo')
    }
  }
}

const deleteSelo = async (selo) => {
  if (!confirm(`Tem certeza que deseja excluir o selo "${selo.descricao}"?`)) {
    return
  }

  try {
    await api.delete(`/selos/${selo.id}`)
    await fetchSelos()
  } catch (error) {
    console.error('Erro ao excluir selo:', error)
    alert('Erro ao excluir selo')
  }
}

const saveSelo = async () => {
  saving.value = true
  errors.value = {}

  try {
    // Garantir que o código seja uma string e remover espaços
    const dadosParaEnviar = {
      codigo: String(seloForm.codigo).trim(),
      descricao: seloForm.descricao.trim(),
      ativo: Boolean(seloForm.ativo),
      validade: seloForm.validade ? String(seloForm.validade).trim() : ''
    }

    console.log('Dados a serem enviados:', dadosParaEnviar)

    if (showEditModal.value) {
      console.log('Editando selo:', editingSelo.value.id)
      const response = await api.put(`/selos/${editingSelo.value.id}`, dadosParaEnviar)
      console.log('Resposta da API:', response.data)
    } else {
      console.log('Criando novo selo')
      const response = await api.post('/selos', dadosParaEnviar)
      console.log('Resposta da API:', response.data)
    }

    await fetchSelos()
    closeModal()
  } catch (error) {
    console.error('Erro ao salvar selo:', error)
    console.error('Dados do erro:', error.response?.data)
    
    if (error.response?.data?.errors) {
      // Mostrar erros de validação
      errors.value = error.response.data.errors
      
      // Tratar mensagens de erro específicas
      const errorMessages = Object.entries(error.response.data.errors).map(([field, messages]) => {
        if (field === 'codigo' && messages.includes('The codigo has already been taken.')) {
          return 'Este código já está em uso. Por favor, escolha outro código.'
        }
        if (field === 'validade') {
          return 'A validade é obrigatória.'
        }
        return messages.join(', ')
      })

      if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'))
      }
    } else if (error.response?.data?.message) {
      alert(error.response.data.message)
    } else {
      alert('Erro ao salvar selo. Verifique os dados e tente novamente.')
    }
  } finally {
    saving.value = false
  }
}

const closeModal = () => {
  showCreateModal.value = false
  showEditModal.value = false
  editingSelo.value = null
  seloForm.codigo = ''
  seloForm.descricao = ''
  seloForm.ativo = true
  seloForm.validade = ''
  errors.value = {}
}

onMounted(() => {
  fetchSelos()
})
</script> 