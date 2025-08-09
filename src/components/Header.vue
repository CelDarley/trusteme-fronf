
<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-3 logo logo-hover">
            <!-- Logo SVG do Consentir -->
            <img src="/logo.svg" alt="Consentir Logo" class="h-8 w-auto logo-image" />
            <div class="flex flex-col">
              <span class="text-xl font-bold text-trust-600">{{ siteName || 'Consentir' }}</span>
              <span v-if="siteSlogan" class="text-xs text-gray-500 leading-none">{{ siteSlogan }}</span>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              to="/"
              class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-trust-600 font-semibold': $route.name === 'Home' }"
            >
              Home
            </router-link>
            <router-link
              to="/planos"
              class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-trust-600 font-semibold': $route.name === 'Plans' }"
            >
              Planos
            </router-link>
            <router-link
              to="/sobre"
              class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-trust-600 font-semibold': $route.name === 'About' }"
            >
              Sobre
            </router-link>
            <router-link
              to="/faq"
              class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-trust-600 font-semibold': $route.name === 'Faq' }"
            >
              FAQ
            </router-link>
            <router-link
              to="/depoimentos"
              class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-trust-600 font-semibold': $route.name === 'Testimonials' }"
            >
              Depoimentos
            </router-link>
            <router-link
              to="/contato"
              class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-trust-600 font-semibold': $route.name === 'Contact' }"
            >
              Contato
            </router-link>
          </div>
        </div>

        <!-- User Menu -->
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <div v-if="authStore.isAuthenticated" class="relative">
              <div class="flex items-center space-x-4">
                <router-link
                  v-if="authStore.isAdmin"
                  to="/admin"
                  class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Admin
                </router-link>
                <router-link
                  v-else
                  to="/dashboard"
                  class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </router-link>
                <span class="text-gray-700 text-sm">
                  Olá, {{ authStore.getUser?.name }}
                </span>
                <button
                  @click="handleLogout"
                  class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sair
                </button>
              </div>
            </div>
            <div v-else class="flex items-center space-x-4">
              <router-link
                to="/login"
                class="text-gray-700 hover:text-trust-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </router-link>
              <router-link
                to="/registro"
                class="btn-primary"
              >
                Registrar
              </router-link>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-trust-600 p-2"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <router-link
            to="/"
            class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Home
          </router-link>
          <router-link
            to="/planos"
            class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Planos
          </router-link>
          <router-link
            to="/sobre"
            class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Sobre
          </router-link>
          <router-link
            to="/faq"
            class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            FAQ
          </router-link>
          <router-link
            to="/depoimentos"
            class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Depoimentos
          </router-link>
          <router-link
            to="/contato"
            class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Contato
          </router-link>
          
          <div class="border-t border-gray-200 pt-4">
            <div v-if="authStore.isAuthenticated" class="space-y-1">
              <router-link
                v-if="authStore.isAdmin"
                to="/admin"
                class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
                @click="mobileMenuOpen = false"
              >
                Admin
              </router-link>
              <router-link
                v-else
                to="/dashboard"
                class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
                @click="mobileMenuOpen = false"
              >
                Dashboard
              </router-link>
              <button
                @click="handleLogout"
                class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Sair
              </button>
            </div>
            <div v-else class="space-y-1">
              <router-link
                to="/login"
                class="text-gray-700 hover:text-trust-600 block px-3 py-2 rounded-md text-base font-medium"
                @click="mobileMenuOpen = false"
              >
                Login
              </router-link>
              <router-link
                to="/registro"
                class="btn-primary block text-center"
                @click="mobileMenuOpen = false"
              >
                Registrar
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import api from '@/services/api'

const authStore = useAuthStore()
const mobileMenuOpen = ref(false)

const siteName = ref('')
const siteSlogan = ref('')

const handleLogout = async () => {
  await authStore.logout()
  mobileMenuOpen.value = false
}

onMounted(async () => {
  try {
    const { data } = await api.get('/site-content')
    if (data?.success) {
      siteName.value = data.data['site_name'] || 'Consentir'
      siteSlogan.value = data.data['site_slogan'] || ''
    }
  } catch (e) {
    console.error('Erro ao carregar conteúdo público:', e)
  }
})
</script>
