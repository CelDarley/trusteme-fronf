<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Identidade Organizacional</h1>
    
    <div v-if="loading" class="text-gray-500">Carregando...</div>
    
    <div v-else>
      <!-- Nossa Missão -->
      <section class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4 text-trust-800">Nossa Missão</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Título da Missão</label>
            <input 
              v-model="form['about.mission_title']" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Nossa Missão"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Descrição da Missão</label>
            <textarea 
              v-model="form['about.mission_text']" 
              rows="4" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Descreva a missão da sua organização..."
            ></textarea>
          </div>
        </div>
      </section>

      <!-- Nossos Valores -->
      <section class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4 text-trust-800">Nossos Valores</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Título dos Valores</label>
            <input 
              v-model="form['about.values_title']" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Nossos Valores"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Descrição dos Valores</label>
            <textarea 
              v-model="form['about.values_text']" 
              rows="4" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Descreva os valores da sua organização..."
            ></textarea>
          </div>
        </div>
      </section>

      <!-- Nossa Equipe -->
      <section class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4 text-trust-800">Nossa Equipe</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Título da Equipe</label>
            <input 
              v-model="form['about.team_title']" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Nossa Equipe"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Descrição da Equipe</label>
            <textarea 
              v-model="form['about.team_subtitle']" 
              rows="4" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Descreva sua equipe..."
            ></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Texto Detalhado da Equipe</label>
            <textarea 
              v-model="form['about.team_text']" 
              rows="6" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Descreva detalhadamente sua equipe, valores e cultura organizacional..."
            ></textarea>
          </div>
        </div>
      </section>

      <!-- Nossa História -->
      <section class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4 text-trust-800">Nossa História</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Título da História</label>
            <input 
              v-model="form['about.history_title']" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Nossa História"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Descrição da História</label>
            <textarea 
              v-model="form['about.history_text']" 
              rows="6" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trust-500" 
              placeholder="Conte a história da sua organização..."
            ></textarea>
          </div>
        </div>
      </section>

      <!-- Botão Salvar -->
      <div class="flex justify-end mt-6">
        <button
          @click="saveSettings"
          :disabled="saving"
          class="bg-trust-600 hover:bg-trust-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-md transition-colors font-medium"
        >
          {{ saving ? 'Salvando...' : 'Salvar Alterações' }}
        </button>
      </div>

      <!-- Mensagens de feedback -->
      <div v-if="message" class="mt-4 p-4 rounded-md" :class="messageType === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const form = ref({})
const loading = ref(true)
const saving = ref(false)
const message = ref('')
const messageType = ref('')

onMounted(async () => {
  await loadSettings()
})

const loadSettings = async () => {
  try {
    const { data } = await api.get('/site-settings')
    if (data?.success) {
      const settingsObj = {}
      data.data.forEach(setting => {
        settingsObj[setting.key] = setting.value
      })
      form.value = settingsObj
    }
  } catch (error) {
    console.error('Erro ao carregar configurações:', error)
    showMessage('Erro ao carregar configurações', 'error')
  } finally {
    loading.value = false
  }
}

const saveSettings = async () => {
  saving.value = true
  try {
    const settingsArray = Object.entries(form.value).map(([key, value]) => ({
      key,
      value: value || ''
    }))

    await api.post('/site-settings/bulk-update', {
      settings: settingsArray
    })

    showMessage('Configurações salvas com sucesso!', 'success')
  } catch (error) {
    console.error('Erro ao salvar configurações:', error)
    showMessage('Erro ao salvar configurações', 'error')
  } finally {
    saving.value = false
  }
}

const showMessage = (msg, type) => {
  message.value = msg
  messageType.value = type
  setTimeout(() => {
    message.value = ''
  }, 3000)
}
</script>
