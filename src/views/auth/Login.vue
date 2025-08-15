<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="text-center">
        <router-link to="/" class="text-3xl font-bold text-trust-600">
          Consentir
        </router-link>
        <h2 class="mt-6 text-3xl font-bold text-gray-900">
          Faça login na sua conta
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Ou
          <router-link to="/registro" class="font-medium text-trust-600 hover:text-trust-500">
            crie uma conta gratuita
          </router-link>
        </p>
      </div>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="handleLogin" class="space-y-6">
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
            placeholder="Sua senha"
          />

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                v-model="form.remember"
                class="h-4 w-4 text-trust-600 focus:ring-trust-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Lembrar de mim
              </label>
            </div>

            <div class="text-sm">
              <router-link to="/esqueci-senha" class="font-medium text-trust-600 hover:text-trust-500">
                Esqueceu sua senha?
              </router-link>
            </div>
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
                Entrando...
              </span>
              <span v-else>Entrar</span>
            </button>
          </div>

          <div class="flex flex-col items-center space-y-4">
            <button
              type="button"
              @click="testAdminLogin"
              class="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              :disabled="authStore.loading"
            >
              Testar Login Admin
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

        <!-- Social Login (Optional) -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Ou continue com</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-3">
            <button
              type="button"
              @click="handleGoogleLogin"
              :disabled="authStore.loading"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span class="ml-2">
                <span v-if="authStore.loading">Conectando...</span>
                <span v-else>Continuar com Google</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import FormInput from '@/components/FormInput.vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const errors = ref({})

const validateForm = () => {
  errors.value = {}
  
  if (!form.email.trim()) {
    errors.value.email = 'Email é obrigatório'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.value.email = 'Email inválido'
  }
  
  if (!form.password) {
    errors.value.password = 'Senha é obrigatória'
  } else if (form.password.length < 6) {
    errors.value.password = 'Senha deve ter pelo menos 6 caracteres'
  }
  
  return Object.keys(errors.value).length === 0
}

const handleLogin = async () => {
  if (!validateForm()) {
    return
  }
  
  try {
    await authStore.login({
      email: form.email,
      password: form.password,
      remember: form.remember
    })
  } catch (error) {
    // Error is handled by the store
    console.error('Login error:', error)
  }
}

const handleGoogleLogin = async () => {
  try {
    await authStore.loginWithGoogle()
  } catch (error) {
    console.error('Erro no login com Google:', error)
  }
}

const testAdminLogin = async () => {
  try {
    await authStore.testAdminLogin()
    if (authStore.isAdmin) {
      router.push('/admin')
    } else {
      router.push('/dashboard')
    }
  } catch (error) {
    console.error('Erro no login admin:', error)
    authStore.error = error.response?.data?.message || 'Erro ao fazer login'
  }
}
</script>
