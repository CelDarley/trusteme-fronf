
<template>
  <div class="py-20 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Perguntas Frequentes
        </h1>
        <p class="text-xl text-gray-600">
          Encontre respostas para as dúvidas mais comuns sobre o Trust Me
        </p>
      </div>

      <!-- Search -->
      <div class="mb-12">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar perguntas..."
            class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-500 focus:border-transparent"
          />
          <svg class="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center">
        <Loader text="Carregando perguntas..." />
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center text-red-600 mb-8">
        <p>{{ error }}</p>
        <button @click="fetchFaqs" class="btn-primary mt-4">
          Tentar Novamente
        </button>
      </div>

      <!-- FAQ List -->
      <div v-else class="space-y-4">
        <div
          v-for="faq in filteredFaqs"
          :key="faq.id"
          class="bg-white rounded-lg shadow-sm border border-gray-200"
        >
          <button
            @click="toggleFaq(faq.id)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
            <svg
              class="h-5 w-5 text-gray-500 transform transition-transform"
              :class="{ 'rotate-180': openFaqs.includes(faq.id) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div
            v-show="openFaqs.includes(faq.id)"
            class="px-6 pb-4 text-gray-600"
            v-html="faq.answer"
          ></div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="!loading && !error && filteredFaqs.length === 0" class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.5a7.962 7.962 0 01-5.657-2.343m0 0L3 21l2.343-2.343M21 3l-2.343 2.343m0 0a7.962 7.962 0 00-11.314 0"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Nenhuma pergunta encontrada</h3>
        <p class="text-gray-600">Tente buscar com outros termos ou entre em contato conosco.</p>
      </div>

      <!-- Contact CTA -->
      <div class="mt-16 bg-trust-50 rounded-lg p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Não encontrou sua resposta?
        </h2>
        <p class="text-gray-600 mb-6">
          Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida.
        </p>
        <router-link
          to="/contato"
          class="btn-primary"
        >
          Entrar em Contato
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Loader from '@/components/Loader.vue'
import api from '@/services/api'

const faqs = ref([])
const loading = ref(true)
const error = ref('')
const searchQuery = ref('')
const openFaqs = ref([])

const filteredFaqs = computed(() => {
  if (!searchQuery.value) return faqs.value
  
  const query = searchQuery.value.toLowerCase()
  return faqs.value.filter(faq => 
    faq.question.toLowerCase().includes(query) ||
    faq.answer.toLowerCase().includes(query)
  )
})

const toggleFaq = (id) => {
  const index = openFaqs.value.indexOf(id)
  if (index > -1) {
    openFaqs.value.splice(index, 1)
  } else {
    openFaqs.value.push(id)
  }
}

const fetchFaqs = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const response = await api.get('/faqs')
    faqs.value = response.data.data || response.data
    
    // Se não houver FAQs da API, usar FAQs padrão
    if (!faqs.value.length) {
      faqs.value = getDefaultFaqs()
    }
  } catch (err) {
    error.value = 'Erro ao carregar perguntas frequentes. Tente novamente.'
    console.error('Erro ao buscar FAQs:', err)
    // Usar FAQs padrão em caso de erro
    faqs.value = getDefaultFaqs()
  } finally {
    loading.value = false
  }
}

const getDefaultFaqs = () => {
  return [
    {
      id: 1,
      question: 'Como posso começar a usar o Trust Me?',
      answer: 'É muito simples! Basta se registrar gratuitamente em nossa plataforma, confirmar seu email e você já pode começar a criar seus primeiros projetos. Oferecemos um período de teste gratuito para que você possa explorar todas as funcionalidades.'
    },
    {
      id: 2,
      question: 'Posso convidar membros da minha equipe?',
      answer: 'Sim! Você pode convidar quantos membros quiser para colaborar em seus projetos. Cada plano tem um limite específico de usuários, mas você sempre pode fazer upgrade conforme sua equipe cresce.'
    },
    {
      id: 3,
      question: 'Meus dados estão seguros?',
      answer: 'Absolutamente! Utilizamos criptografia de ponta a ponta, backup automático e seguimos as melhores práticas de segurança da indústria. Seus dados são armazenados em servidores seguros e nunca são compartilhados com terceiros.'
    },
    {
      id: 4,
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. Após o cancelamento, você ainda terá acesso às funcionalidades até o final do período já pago.'
    },
    {
      id: 5,
      question: 'Existe suporte técnico disponível?',
      answer: 'Oferecemos suporte técnico por email para todos os usuários. Usuários dos planos pagos têm acesso a suporte prioritário, e o plano Plus inclui suporte 24/7 por chat e telefone.'
    },
    {
      id: 6,
      question: 'Posso integrar o Trust Me com outras ferramentas?',
      answer: 'Sim! Oferecemos integrações com as principais ferramentas do mercado como Slack, Google Drive, Trello, e muitas outras. A disponibilidade de integrações varia conforme o plano escolhido.'
    },
    {
      id: 7,
      question: 'Como funciona o período de teste gratuito?',
      answer: 'Oferecemos 14 dias de teste gratuito em todos os planos pagos. Durante este período, você tem acesso completo a todas as funcionalidades do plano escolhido. Você pode cancelar a qualquer momento sem cobrança.'
    },
    {
      id: 8,
      question: 'Posso fazer backup dos meus dados?',
      answer: 'Sim! Realizamos backups automáticos diários de todos os seus dados. Além disso, você pode exportar seus projetos e dados a qualquer momento através das configurações da sua conta.'
    }
  ]
}

onMounted(() => {
  fetchFaqs()
})
</script>
