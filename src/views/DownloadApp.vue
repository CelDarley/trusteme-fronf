<template>
  <div class="min-h-screen bg-gradient-to-br from-trust-50 to-trust-100">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center space-x-3">
            <img src="/src/assets/logo.svg" alt="Trust-me" class="h-8 w-auto" />
            <span class="text-xl font-bold text-trust-600">Trust-me</span>
          </router-link>
          <router-link 
            to="/" 
            class="text-trust-600 hover:text-trust-700 font-medium"
          >
            ← Voltar ao site
          </router-link>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-12">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Baixe o Aplicativo Trust-me
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Tenha acesso completo às funcionalidades de acordos de consentimento diretamente no seu dispositivo móvel
          </p>
        </div>

        <!-- App Icon -->
        <div class="mb-12">
          <div class="w-32 h-32 bg-trust-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>

        <!-- Download Buttons -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <!-- Android -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center mb-4">
              <svg class="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0001.5511-.4482.9997-.9993.9997m11.4045-6.9181l2.0107-3.4182c.2079-.3535.1587-.8048-.1234-1.0894l-1.7578-1.7578c-.2846-.2822-.7359-.3313-1.0894-.1234l-2.0107 3.4182c-1.0776-.5309-2.3114-.8227-3.6108-.8227-1.2994 0-2.5332.2918-3.6108.8227L9.9519 1.7547c-.3535-.2079-.8048-.1587-1.0894.1234L7.1047 3.6359c-.2846.2846-.3313.7359-.1234 1.0894l2.0107 3.4182C6.6919 9.7727 6 11.2885 6 12.9634c0 1.6749.6919 3.1907 1.9922 4.2782l-2.0107 3.4182c-.2079.3535-.1587.8048.1234 1.0894l1.7578 1.7578c.2846.2822.7359.3313 1.0894.1234l2.0107-3.4182c1.0776.5309 2.3114.8227 3.6108.8227 1.2994 0 2.5332-.2918 3.6108-.8227l2.0107 3.4182c.3535.2079.8048.1587 1.0894-.1234l1.7578-1.7578c.2846-.2846.3313-.7359.1234-1.0894l-2.0107-3.4182C17.3081 16.1541 18 14.6383 18 12.9634c0-1.6749-.6919-3.1907-1.9922-4.2782z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Android</h3>
            <p class="text-sm text-gray-600 mb-4">Disponível no Google Play</p>
            <button class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Baixar para Android
            </button>
          </div>

          <!-- iOS -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-center mb-4">
              <svg class="w-12 h-12 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">iOS</h3>
            <p class="text-sm text-gray-600 mb-4">Disponível na App Store</p>
            <button class="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Baixar para iOS
            </button>
          </div>
        </div>

        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-trust-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Segurança Total</h3>
            <p class="text-gray-600">Seus dados protegidos com criptografia de ponta a ponta</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-trust-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Sincronização</h3>
            <p class="text-gray-600">Acesse seus acordos em qualquer dispositivo</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-trust-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-trust-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Fácil de Usar</h3>
            <p class="text-gray-600">Interface intuitiva para criar e gerenciar acordos</p>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Pronto para começar?</h2>
          <p class="text-gray-600 mb-6">
            Baixe o aplicativo agora e tenha acesso completo às funcionalidades do Trust-me no seu dispositivo móvel.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-trust-600 hover:bg-trust-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Baixar Agora
            </button>
            <router-link 
              to="/" 
              class="border-2 border-trust-600 text-trust-600 hover:bg-trust-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
            >
              Saber Mais
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Componente simples para download do aplicativo
</script> 