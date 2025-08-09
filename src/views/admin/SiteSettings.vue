<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Conteúdo da Home</h1>

    <div v-if="loading" class="text-gray-500">Carregando...</div>

    <div v-else class="space-y-8">
      <!-- Gerais -->
      <section class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Gerais</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nome do Site</label>
            <input v-model="form['site_name']" type="text" class="mt-1 input" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Slogan</label>
            <input v-model="form['site_slogan']" type="text" class="mt-1 input" />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Descrição do Site</label>
            <textarea v-model="form['site_description']" rows="3" class="mt-1 textarea"></textarea>
          </div>
        </div>
      </section>

      <!-- Hero -->
      <section class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Hero</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Título</label>
            <input v-model="form['home.hero_title']" type="text" class="mt-1 input" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Subtítulo</label>
            <textarea v-model="form['home.hero_subtitle']" rows="3" class="mt-1 textarea"></textarea>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">CTA Primário</label>
            <input v-model="form['home.cta_primary_label']" type="text" class="mt-1 input" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">CTA Secundário</label>
            <input v-model="form['home.cta_secondary_label']" type="text" class="mt-1 input" />
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold">Features</h2>
          <button @click="addFeature" class="btn-primary">Adicionar</button>
        </div>
        <div v-if="features.length === 0" class="text-gray-500">Nenhuma feature adicionada.</div>
        <div v-for="(f, idx) in features" :key="idx" class="border rounded p-4 mb-3">
          <div class="flex justify-between items-center mb-3">
            <span class="font-medium">Item {{ idx + 1 }}</span>
            <button @click="removeFeature(idx)" class="text-red-600 hover:underline">Remover</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Título</label>
              <input v-model="f.title" type="text" class="mt-1 input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Texto</label>
              <textarea v-model="f.text" rows="2" class="mt-1 textarea"></textarea>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold">Estatísticas</h2>
          <button @click="addStat" class="btn-primary">Adicionar</button>
        </div>
        <div v-if="stats.length === 0" class="text-gray-500">Nenhuma estatística adicionada.</div>
        <div v-for="(s, idx) in stats" :key="idx" class="border rounded p-4 mb-3">
          <div class="flex justify-between items-center mb-3">
            <span class="font-medium">Item {{ idx + 1 }}</span>
            <button @click="removeStat(idx)" class="text-red-600 hover:underline">Remover</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Valor</label>
              <input v-model="s.value" type="text" class="mt-1 input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Rótulo</label>
              <input v-model="s.label" type="text" class="mt-1 input" />
            </div>
          </div>
        </div>
      </section>

      <!-- Steps -->
      <section class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold">Passos</h2>
          <button @click="addStep" class="btn-primary">Adicionar</button>
        </div>
        <div v-if="steps.length === 0" class="text-gray-500">Nenhum passo adicionado.</div>
        <div v-for="(st, idx) in steps" :key="idx" class="border rounded p-4 mb-3">
          <div class="flex justify-between items-center mb-3">
            <span class="font-medium">Passo {{ idx + 1 }}</span>
            <button @click="removeStep(idx)" class="text-red-600 hover:underline">Remover</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Título</label>
              <input v-model="st.title" type="text" class="mt-1 input" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Texto</label>
              <textarea v-model="st.text" rows="2" class="mt-1 textarea"></textarea>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Block -->
      <section class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Bloco CTA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Título</label>
            <input v-model="form['home.cta_block_title']" type="text" class="mt-1 input" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Subtítulo</label>
            <textarea v-model="form['home.cta_block_subtitle']" rows="3" class="mt-1 textarea"></textarea>
          </div>
        </div>
      </section>

      <div class="flex justify-end gap-3">
        <button @click="load" class="btn-secondary">Recarregar</button>
        <button @click="save" class="btn-primary">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import api from '@/services/api'

const loading = ref(true)
const form = reactive({
  'site_name': '',
  'site_slogan': '',
  'site_description': '',
  'home.hero_title': '',
  'home.hero_subtitle': '',
  'home.cta_primary_label': '',
  'home.cta_secondary_label': '',
  'home.cta_block_title': '',
  'home.cta_block_subtitle': '',
})

const features = ref([])
const stats = ref([])
const steps = ref([])

function normalizeSettings(list) {
  const out = {}
  for (const s of list) {
    if (s.type === 'json') {
      try { out[s.key] = JSON.parse(s.value || '[]') } catch { out[s.key] = [] }
    } else if (s.type === 'boolean') {
      out[s.key] = s.value === '1' || s.value === 1 || s.value === true
    } else {
      out[s.key] = s.value ?? ''
    }
  }
  return out
}

async function load() {
  loading.value = true
  try {
    const [homeRes, generalRes] = await Promise.all([
      api.get('/site-settings', { params: { group: 'home' } }),
      api.get('/site-settings', { params: { group: 'general' } })
    ])
    const settings = { ...normalizeSettings(homeRes?.data?.data || []), ...normalizeSettings(generalRes?.data?.data || []) }
    form['site_name'] = settings['site_name'] || ''
    form['site_slogan'] = settings['site_slogan'] || ''
    form['site_description'] = settings['site_description'] || ''
    form['home.hero_title'] = settings['home.hero_title'] || ''
    form['home.hero_subtitle'] = settings['home.hero_subtitle'] || ''
    form['home.cta_primary_label'] = settings['home.cta_primary_label'] || ''
    form['home.cta_secondary_label'] = settings['home.cta_secondary_label'] || ''
    form['home.cta_block_title'] = settings['home.cta_block_title'] || ''
    form['home.cta_block_subtitle'] = settings['home.cta_block_subtitle'] || ''
    features.value = settings['home.features'] || []
    stats.value = settings['home.stats'] || []
    steps.value = settings['home.steps'] || []
  } catch (e) {
    console.error('Erro ao carregar configurações:', e)
  } finally {
    loading.value = false
  }
}

async function save() {
  try {
    const payload = {
      settings: [
        { key: 'site_name', value: form['site_name'] },
        { key: 'site_slogan', value: form['site_slogan'] },
        { key: 'site_description', value: form['site_description'] },
        { key: 'home.hero_title', value: form['home.hero_title'] },
        { key: 'home.hero_subtitle', value: form['home.hero_subtitle'] },
        { key: 'home.cta_primary_label', value: form['home.cta_primary_label'] },
        { key: 'home.cta_secondary_label', value: form['home.cta_secondary_label'] },
        { key: 'home.cta_block_title', value: form['home.cta_block_title'] },
        { key: 'home.cta_block_subtitle', value: form['home.cta_block_subtitle'] },
        { key: 'home.features', value: JSON.stringify(features.value) },
        { key: 'home.stats', value: JSON.stringify(stats.value) },
        { key: 'home.steps', value: JSON.stringify(steps.value) },
      ]
    }
    await api.post('/site-settings/bulk-update', payload)
    alert('Conteúdo salvo com sucesso!')
  } catch (e) {
    console.error('Erro ao salvar conteúdo:', e)
    alert('Erro ao salvar conteúdo.')
  }
}

function addFeature() { features.value.push({ title: '', text: '' }) }
function removeFeature(idx) { features.value.splice(idx, 1) }
function addStat() { stats.value.push({ value: '', label: '' }) }
function removeStat(idx) { stats.value.splice(idx, 1) }
function addStep() { steps.value.push({ title: '', text: '' }) }
function removeStep(idx) { steps.value.splice(idx, 1) }

onMounted(load)
</script>

<style scoped>
.input { @apply w-full border rounded px-3 py-2 focus:outline-none focus:ring; }
.textarea { @apply w-full border rounded px-3 py-2 focus:outline-none focus:ring; }
.btn-primary { @apply bg-trust-600 text-white px-4 py-2 rounded hover:bg-trust-700; }
.btn-secondary { @apply bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300; }
</style> 