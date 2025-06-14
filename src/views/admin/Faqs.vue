
<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Gerenciar FAQs</h1>
      <p class="text-gray-600">Gerencie as perguntas frequentes do site</p>
    </div>

    <!-- Add FAQ Button -->
    <div class="mb-6">
      <button @click="showCreateModal = true" class="btn-primary">
        Nova Pergunta
      </button>
    </div>

    <!-- FAQs List -->
    <div class="bg-white rounded-lg shadow-sm">
      <div v-if="loading" class="p-8">
        <Loader text="Carregando FAQs..." />
      </div>

      <div v-else-if="faqs.length === 0" class="p-8 text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-gray-500">Nenhuma pergunta encontrada</p>
      </div>

      <div v-else class="divide-y divide-gray-200">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="p-6 hover:bg-gray-50 transition-colors"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-lg font-medium text-gray-900 mb-2">{{ faq.question }}</h3>
              <div class="text-gray-600 mb-4" v-html="faq.answer"></div>
              <div class="flex items-center text-sm text-gray-500">
                <span>Criado em {{ formatDate(faq.created_at) }}</span>
                <span v-if="faq.updated_at !== faq.created_at" class="ml-4">
                  Atualizado em {{ formatDate(faq.updated_at) }}
                </span>
              </div>
            </div>
            <div class="flex space-x-2 ml-4">
              <button
                @click="editFaq(faq)"
                class="text-trust-600 hover:text-trust-900"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>
              <button
                @click="deleteFaq(faq)"
                class="text-red-600 hover:text-red-900"
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

    <!-- Create/Edit FAQ Modal -->
    <Modal :show="showCreateModal || showEditModal" @close="closeModal" :title="editingFaq ? 'Editar FAQ' : 'Nova FAQ'">
      <form @submit.prevent="saveFaq" class="space-y-4">
        <div class="mb-4">
          <label for="question" class="block text-sm font-medium text-gray-700 mb-2">
            Pergunta <span class="text-red-500">*</span>
          </label>
          <textarea
            id="question"
            v-model="faqForm.question"
            rows="2"
            required
            class="input-field resize-none"
            :class="{ 'border-red-500 focus:ring-red-500': errors.question }"
            placeholder="Digite a pergunta..."
          ></textarea>
          <p v-if="errors.question" class="mt-1 text-sm text-red-600">{{ errors.question }}</p>
        </div>
        
        <div class="mb-4">
          <label for="answer" class="block text-sm font-medium text-gray-700 mb-2">
            Resposta <span class="text-red-500">*</span>
          </label>
          <textarea
            id="answer"
            v-model="faqForm.answer"
            rows="5"
            required
            class="input-field resize-none"
            :class="{ 'border-red-500 focus:ring-red-500': errors.answer }"
            placeholder="Digite a resposta..."
          ></textarea>
          <p v-if="errors.answer" class="mt-1 text-sm text-red-600">{{ errors.answer }}</p>
          <p class="mt-1 text-sm text-gray-500">Você pode usar HTML básico para formatação.</p>
        </div>
      </form>
      
      <template #footer>
        <div class="flex justify-end space-x-3">
          <button @click="closeModal" class="btn-secondary">
            Cancelar
          </button>
          <button @click="saveFaq" :disabled="saving" class="btn-primary">
            {{ saving ? 'Salvando...' : (editingFaq ? 'Atualizar' : 'Criar') }}
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import Loader from '@/components/Loader.vue'
import Modal from '@/components/Modal.vue'
import api from '@/services/api'

const faqs = ref([])
const loading = ref(true)
const saving = ref(false)
const showCreateModal = ref(false)
const showEditModal = ref(false)
const editingFaq = ref(null)
const errors = ref({})

const faqForm = reactive({
  question: '',
  answer: ''
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR')
}

const fetchFaqs = async () => {
  loading.value = true
  try {
    const response = await api.get('/admin/faqs')
    faqs.value = response.data.data || response.data
    
    // Dados simulados se a API não retornar dados
    if (!faqs.value.length) {
      faqs.value = [
        {
          id: 1,
          question: 'Como posso começar a usar o Trust Me?',
          answer: 'É muito simples! Basta se registrar gratuitamente em nossa plataforma, confirmar seu email e você já pode começar a criar seus primeiros projetos.',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: 2,
          question: 'Posso convidar membros da minha equipe?',
          answer: 'Sim! Você pode convidar quantos membros quiser para colaborar em seus projetos. Cada plano tem um limite específico de usuários.',
          created_at: new Date(Date.now() - 86400000).toISOString(),
          updated_at: new Date(Date.now() - 86400000).toISOString()
        }
      ]
    }
  } catch (error) {
    console.error('Erro ao carregar FAQs:', error)
  } finally {
    loading.value = false
  }
}

const editFaq = (faq) => {
  editingFaq.value = faq
  faqForm.question = faq.question
  faqForm.answer = faq.answer
  showEditModal.value = true
}

const closeModal = () => {
  showCreateModal.value = false
  showEditModal.value = false
  editingFaq.value = null
  faqForm.question = ''
  faqForm.answer = ''
  errors.value = {}
}

const saveFaq = async () => {
  errors.value = {}
  saving.value = true
  
  try {
    if (editingFaq.value) {
      await api.put(`/admin/faqs/${editingFaq.value.id}`, faqForm)
    } else {
      await api.post('/admin/faqs', faqForm)
    }
    
    await fetchFaqs()
    closeModal()
  } catch (error) {
    console.error('Erro ao salvar FAQ:', error)
    if (error.response?.data?.errors) {
      errors.value = error.response.data.errors
    }
  } finally {
    saving.value = false
  }
}

const deleteFaq = async (faq) => {
  if (confirm(`Tem certeza que deseja excluir esta pergunta?`)) {
    try {
      await api.delete(`/admin/faqs/${faq.id}`)
      await fetchFaqs()
    } catch (error) {
      console.error('Erro ao excluir FAQ:', error)
    }
  }
}

onMounted(() => {
  fetchFaqs()
})
</script>
