<template>
  <div class="min-h-screen bg-gradient-to-br from-trust-50 to-trust-100">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Header -->
        <div class="mb-12">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Baixe o App Consentir para Android
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Tenha acesso completo às funcionalidades de relacionamentos seguros diretamente no seu dispositivo Android
          </p>
        </div>

        <!-- App Icon -->
        <div class="mb-12">
          <div class="w-32 h-32 bg-trust-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
        </div>

        <!-- Android Download Section -->
        <div class="mb-16">
          <div class="bg-white rounded-2xl p-8 shadow-lg max-w-lg mx-auto">
            <div class="mb-6">
              <svg class="w-16 h-16 text-green-600 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9997-.9993.9997m11.4653-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.503C15.5027 8.2006 13.8024 7.69 12.0001 7.69c-1.8023 0-3.5026.5105-4.2652 1.2828L5.7126 5.4898a.4161.4161 0 00-.5972-.1518.416.416 0 00-.1518.5972L7.0609 9.321C4.6812 10.8926 3.2993 13.5582 3.2993 16.5993c0 .1947.0656.3897.1948.5972.1292.2075.3243.3563.5972.3563h15.8174c.2729 0 .468-.1488.5972-.3563.1292-.2075.1948-.4025.1948-.5972 0-3.0411-1.3819-5.7067-3.7616-7.2783"/>
              </svg>
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Disponível para Android</h2>
              <p class="text-gray-600">Baixe gratuitamente na Google Play Store</p>
            </div>

            <!-- Android Download Button -->
            <a 
              :href="playStoreUrl" 
              target="_blank"
              class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors mb-4 flex items-center justify-center shadow-lg"
            >
              <svg class="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993.9993.4482.9993.9993-.4482.9997-.9993.9997m11.4653-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.503C15.5027 8.2006 13.8024 7.69 12.0001 7.69c-1.8023 0-3.5026.5105-4.2652 1.2828L5.7126 5.4898a.4161.4161 0 00-.5972-.1518.416.416 0 00-.1518.5972L7.0609 9.321C4.6812 10.8926 3.2993 13.5582 3.2993 16.5993c0 .1947.0656.3897.1948.5972.1292.2075.3243.3563.5972.3563h15.8174c.2729 0 .468-.1488.5972-.3563.1292-.2075.1948-.4025.1948-.5972 0-3.0411-1.3819-5.7067-3.7616-7.2783"/>
              </svg>
              Baixar no Google Play
            </a>

            <!-- QR Code Section -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4 text-center">Escaneie com seu Android</h3>
              
              <!-- QR Code Placeholder -->
              <div class="bg-gray-100 w-40 h-40 mx-auto rounded-xl flex items-center justify-center mb-4">
                <div class="text-center">
                  <svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                  </svg>
                  <p class="text-sm text-gray-500">QR Code</p>
                </div>
              </div>

              <p class="text-sm text-gray-600 text-center">
                Abra a câmera do seu Android e aponte para o QR Code
              </p>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">100% Seguro</h3>
            <p class="text-gray-600">Criptografia de ponta e proteção total dos seus dados</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Rápido e Fácil</h3>
            <p class="text-gray-600">Interface intuitiva otimizada para Android</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Relacionamentos Seguros</h3>
            <p class="text-gray-600">Consentimento claro e documentado para todos</p>
          </div>
        </div>

        <!-- Requirements Section -->
        <div class="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Requisitos do Sistema</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="flex items-start">
              <svg class="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h4 class="font-semibold text-gray-900">Android 6.0+</h4>
                <p class="text-gray-600">Compatível com Android 6.0 (API 23) ou superior</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h4 class="font-semibold text-gray-900">100 MB Livres</h4>
                <p class="text-gray-600">Espaço necessário para instalação</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h4 class="font-semibold text-gray-900">Conexão Internet</h4>
                <p class="text-gray-600">Necessária para sincronização</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-6 h-6 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <h4 class="font-semibold text-gray-900">Google Play Services</h4>
                <p class="text-gray-600">Para notificações e atualizações</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Coming Soon Notice -->
        <div class="bg-green-50 border border-green-200 rounded-lg p-6">
          <div class="flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-green-800 font-medium">
              App Android em desenvolvimento - Em breve na Google Play Store!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Google Play Store URL (placeholder for now)
const playStoreUrl = ref('https://play.google.com/store/apps/details?id=com.consentir.app')
</script> 