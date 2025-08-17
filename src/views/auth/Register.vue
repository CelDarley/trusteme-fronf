
<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="text-center">
        <router-link to="/" class="text-3xl font-bold text-trust-600">
          Consentir
        </router-link>
        <h2 class="mt-6 text-3xl font-bold text-gray-900">
          Crie sua conta gratuita
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Ou
          <router-link to="/login" class="font-medium text-trust-600 hover:text-trust-500">
            faça login na sua conta existente
          </router-link>
        </p>
      </div>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="handleRegister" class="space-y-6">
          <FormInput
            id="name"
            label="Nome completo"
            v-model="form.name"
            required
            :error="errors.name"
            placeholder="Seu nome completo"
          />

          <FormInput
            id="email"
            label="Email"
            type="email"
            v-model="form.email"
            required
            :error="errors.email"
            placeholder="seu@email.com"
          />

          <FormInput
            id="password"
            label="Senha"
            type="password"
            v-model="form.password"
            required
            :error="errors.password"
            placeholder="Mínimo 8 caracteres"
            help="Use pelo menos 8 caracteres com letras e números"
          />

          <FormInput
            id="password_confirmation"
            label="Confirmar senha"
            type="password"
            v-model="form.password_confirmation"
            required
            :error="errors.password_confirmation"
            placeholder="Confirme sua senha"
          />

          <div class="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              v-model="form.terms"
              required
              class="h-4 w-4 text-trust-600 focus:ring-trust-500 border-gray-300 rounded"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-900">
              Eu aceito os
              <a href="#" class="text-trust-600 hover:text-trust-500">Termos de Uso</a>
              e a
              <a href="#" class="text-trust-600 hover:text-trust-500">Política de Privacidade</a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              :disabled="authStore.loading"
              class="w-full btn-primary"
            >
              <span v-if="authStore.loading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Criando conta...
              </span>
              <span v-else>Criar conta</span>
            </button>
          </div>
        </form>

        <!-- Error Message -->
        <div v-if="authStore.error" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex">
            <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <p class="ml-3 text-sm text-red-700">{{ authStore.error }}</p>
          </div>
        </div>

        <!-- Social Register -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Ou registre-se com</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <a
              :href="googleAuthUrl"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span class="ml-2">Google</span>
            </a>

            <button
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span class="ml-2">Facebook</span>
            </button>
          </div>
        </div>

        <!-- Benefits -->
        <div class="mt-8 p-4 bg-trust-50 rounded-lg">
          <h3 class="text-sm font-medium text-trust-800 mb-2">
            Ao criar sua conta, você terá acesso a:
          </h3>
          <ul class="text-sm text-trust-700 space-y-1">
            <li class="flex items-center">
              <svg class="h-4 w-4 text-trust-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              14 dias de teste gratuito
            </li>
            <li class="flex items-center">
              <svg class="h-4 w-4 text-trust-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Suporte técnico especializado
            </li>
            <li class="flex items-center">
              <svg class="h-4 w-4 text-trust-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Todas as funcionalidades premium
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import FormInput from '@/components/FormInput.vue'
import { API_CONFIG } from '@/config/api'

const authStore = useAuthStore()
const router = useRouter()

const googleAuthUrl = `${API_CONFIG.BASE_URL}/auth/google`

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  terms: false
})

const errors = ref({})

const validateForm = () => {
  errors.value = {}
  
  if (!form.name.trim()) {
    errors.value.name = 'Nome é obrigatório'
  } else if (form.name.trim().length < 2) {
    errors.value.name = 'Nome deve ter pelo menos 2 caracteres'
  }
  
  if (!form.email.trim()) {
    errors.value.email = 'Email é obrigatório'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.value.email = 'Email inválido'
  }
  
  if (!form.password) {
    errors.value.password = 'Senha é obrigatória'
  } else if (form.password.length < 8) {
    errors.value.password = 'Senha deve ter pelo menos 8 caracteres'
  }
  
  if (!form.password_confirmation) {
    errors.value.password_confirmation = 'Confirmação de senha é obrigatória'
  } else if (form.password !== form.password_confirmation) {
    errors.value.password_confirmation = 'Senhas não coincidem'
  }
  
  if (!form.terms) {
    errors.value.terms = 'Você deve aceitar os termos de uso'
  }
  
  return Object.keys(errors.value).length === 0
}

const handleRegister = async () => {
  if (!validateForm()) {
    return
  }
  
  try {
    await authStore.register({
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation
    })
    
    // Redirecionar após registro bem-sucedido
    router.push('/dashboard')
  } catch (error) {
    // Error is handled by the store
    console.error('Register error:', error)
  }
}

const handleGoogleLogin = async () => {
  try {
    await authStore.loginWithGoogle()
  } catch (error) {
    console.error('Erro no login com Google:', error)
  }
}
</script>
