
<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Mensagens de Contato</h1>
      <p class="text-gray-600">Visualize e gerencie as mensagens recebidas</p>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar mensagens..."
            class="input-field"
          />
        </div>
        <div>
          <select v-model="subjectFilter" class="input-field">
            <option value="">Todos os assuntos</option>
            <option value="suporte">Suporte Técnico</option>
            <option value="vendas">Vendas</option>
            <option value="parceria">Parcerias</option>
            <option value="feedback">Feedback</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div>
          <select v-model="statusFilter" class="input-field">
            <option value="">Todos os status</option>
            <option value="novo">Novo</option>
            <option value="lido">Lido</option>
            <option value="respondido">Respondido</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Messages List -->
    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
      <div class="p-6 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">
          Mensagens ({{ filteredContacts.length }})
        </h2>
      </div>

      <div v-if="loading" class="p-8">
        <Loader text="Carregando mensagens..." />
      </div>

      <div v-else-if="filteredContacts.length === 0" class="p-8 text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <p class="text-gray-500">Nenhuma mensagem encontrada</p>
      </div>

      <div v-else class="divide-y divide-gray-200">
        <div
          v-for="contact in filteredContacts"
          :key="contact.id"
          class="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
          @click="viewContact(contact)"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <div class="flex items-center mb-2">
                <h3 class="text-lg font-medium text-gray-900 mr-3">{{ contact.name }}</h3>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getStatusClass(contact.status)"
                >
                  {{ getStatusLabel(contact.status) }}
                </span>
                <span
                  class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {{ getSubjectLabel(contact.subject) }}
                </span>
              </div>
              <p class="text-sm text-gray-600 mb-2">{{ contact.email }}</p>
              <p class="text-gray-700 line-clamp-2">{{ contact.message }}</p>
              <div class="flex items-center mt-3 text-sm text-gray-500">
                <span>{{ formatDate(contact.created_at) }}</span>
                <span v-if="contact.phone" class="ml-4">{{ contact.phone }}</span>
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <button
                @click.stop="markAsRead(contact)"
                v-if="contact.status === 'novo'"
                class="text-blue-600 hover:text-blue-900"
                title="Marcar como lido"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
              <button
                @click.stop="markAsResponded(contact)"
                v-if="contact.status !== 'respondido'"
                class="text-green-600 hover:text-green-900"
                title="Marcar como respondido"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
              <button
                @click.stop="deleteContact(contact)"
                class="text-red-600 hover:text-red-900"
                title="Excluir"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View Contact Modal -->
    <Modal :show="showViewModal" @close="closeViewModal" :title="`Mensagem de ${selectedContact?.name}`">
      <div v-if="selectedContact" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nome</label>
            <p class="mt-1 text-sm text-gray-900">{{ selectedContact.name }}</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <p class="mt-1 text-sm text-gray-900">{{ selectedContact.email }}</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Telefone</label>
            <p class="mt-1 text-sm text-gray-900">{{ selectedContact.phone || 'Não informado' }}</p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Assunto</label>
            <p class="mt-1 text-sm text-gray-900">{{ getSubjectLabel(selectedContact.subject) }}</p>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">Mensagem</label>
          <div class="mt-1 p-3 bg-gray-50 rounded-lg">
            <p class="text-sm text-gray-900 whitespace-pre-wrap">{{ selectedContact.message }}</p>
          </div>
        </div>
        
        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
          <span class="text-sm text-gray-500">
            Recebido em {{ formatDate(selectedContact.created_at) }}
          </span>
          <div class="flex space-x-2">
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              :class="getStatusClass(selectedContact.status)"
            >
              {{ getStatusLabel(selectedContact.status) }}
            </span>
          </div>
        </div>
      </div>
      
      <template #footer>
        <div class="flex justify-between">
          <a
            :href="`mailto:${selectedContact?.email}?subject=Re: ${selectedContact?.subject}`"
            class="btn-primary"
          >
            Responder por Email
          </a>
          <button @click="closeViewModal" class="btn-secondary">
            Fechar
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Loader from '@/components/Loader.vue'
import Modal from '@/components/Modal.vue'
import api from '@/services/api'

const contacts = ref([])
const loading = ref(true)
const searchQuery = ref('')
const subjectFilter = ref('')
const statusFilter = ref('')
const showViewModal = ref(false)
const selectedContact = ref(null)

const filteredContacts = computed(() => {
  let filtered = contacts.value
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(contact => 
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.message.toLowerCase().includes(query)
    )
  }
  
  if (subjectFilter.value) {
    filtered = filtered.filter(contact => contact.subject === subjectFilter.value)
  }
  
  if (statusFilter.value) {
    filtered = filtered.filter(contact => contact.status === statusFilter.value)
  }
  
  return filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
})

const getStatusClass = (status) => {
  const classes = {
    'novo': 'bg-blue-100 text-blue-800',
    'lido': 'bg-yellow-100 text-yellow-800',
    'respondido': 'bg-green-100 text-green-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const getStatusLabel = (status) => {
  const labels = {
    'novo': 'Novo',
    'lido': 'Lido',
    'respondido': 'Respondido'
  }
  return labels[status] || status
}

const getSubjectLabel = (subject) => {
  const labels = {
    'suporte': 'Suporte Técnico',
    'vendas': 'Vendas',
    'parceria': 'Parcerias',
    'feedback': 'Feedback',
    'outro': 'Outro'
  }
  return labels[subject] || subject
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const fetchContacts = async () => {
  loading.value = true
  try {
    const response = await api.get('/admin/contacts')
    contacts.value = response.data.data || response.data
    
    // Dados simulados se a API não retornar dados
    if (!contacts.value.length) {
      contacts.value = [
        {
          id: 1,
          name: 'Ana Oliveira',
          email: 'ana@email.com',
          phone: '(11) 99999-9999',
          subject: 'suporte',
          message: 'Olá, estou com dificuldades para acessar minha conta. Poderiam me ajudar?',
          status: 'novo',
          created_at: new Date().toISOString()
        },
        {
          id: 2,
          name: 'Carlos Lima',
          email: 'carlos@email.com',
          phone: '',
          subject: 'vendas',
          message: 'Gostaria de saber mais sobre os planos empresariais. Temos uma equipe de 50 pessoas.',
          status: 'lido',
          created_at: new Date(Date.now() - 3600000).toISOString()
        },
        {
          id: 3,
          name: 'Maria Santos',
          email: 'maria@email.com',
          phone: '(11) 88888-8888',
          subject: 'feedback',
          message: 'Parabéns pela plataforma! Está funcionando muito bem para nossa equipe.',
          status: 'respondido',
          created_at: new Date(Date.now() - 86400000).toISOString()
        }
      ]
    }
  } catch (error) {
    console.error('Erro ao carregar contatos:', error)
  } finally {
    loading.value = false
  }
}

const viewContact = (contact) => {
  selectedContact.value = contact
  showViewModal.value = true
  
  // Marcar como lido automaticamente
  if (contact.status === 'novo') {
    markAsRead(contact)
  }
}

const closeViewModal = () => {
  showViewModal.value = false
  selectedContact.value = null
}

const markAsRead = async (contact) => {
  try {
    await api.put(`/admin/contacts/${contact.id}`, { status: 'lido' })
    contact.status = 'lido'
  } catch (error) {
    console.error('Erro ao marcar como lido:', error)
  }
}

const markAsResponded = async (contact) => {
  try {
    await api.put(`/admin/contacts/${contact.id}`, { status: 'respondido' })
    contact.status = 'respondido'
  } catch (error) {
    console.error('Erro ao marcar como respondido:', error)
  }
}

const deleteContact = async (contact) => {
  if (confirm(`Tem certeza que deseja excluir a mensagem de ${contact.name}?`)) {
    try {
      await api.delete(`/admin/contacts/${contact.id}`)
      await fetchContacts()
    } catch (error) {
      console.error('Erro ao excluir contato:', error)
    }
  }
}

onMounted(() => {
  fetchContacts()
})
</script>
