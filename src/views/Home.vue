
<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-trust-600 to-trust-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              Confie no seu
              <span class="text-trust-200">sucesso</span>
            </h1>
            <p class="text-xl mb-8 text-trust-100">
              A plataforma completa para gerenciar seus projetos, equipes e alcançar resultados extraordinários.
              Simplifique sua gestão e potencialize seus resultados.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link
                to="/registro"
                class="bg-white text-trust-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors text-center"
              >
                Começar Gratuitamente
              </router-link>
              <router-link
                to="/planos"
                class="border-2 border-white text-white hover:bg-white hover:text-trust-600 font-semibold py-3 px-8 rounded-lg transition-colors text-center"
              >
                Ver Planos
              </router-link>
            </div>
          </div>
          <div class="flex justify-center">
            <img
              src="/src/assets/banner.png"
              alt="Trust Me Platform"
              class="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o Trust Me?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para transformar sua gestão
            e impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="bg-trust-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-trust-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Gestão Simplificada</h3>
            <p class="text-gray-600">
              Interface intuitiva que facilita o gerenciamento de projetos e equipes,
              aumentando a produtividade de forma significativa.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="bg-trust-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-trust-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Performance Otimizada</h3>
            <p class="text-gray-600">
              Ferramentas avançadas de análise e relatórios que ajudam você a tomar
              decisões mais inteligentes e estratégicas.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="bg-trust-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-trust-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Segurança Garantida</h3>
            <p class="text-gray-600">
              Seus dados protegidos com criptografia de ponta e backup automático,
              garantindo total segurança e confiabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-trust-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-trust-600 mb-2">10k+</div>
            <div class="text-gray-600">Usuários Ativos</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-trust-600 mb-2">50k+</div>
            <div class="text-gray-600">Projetos Concluídos</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-trust-600 mb-2">99.9%</div>
            <div class="text-gray-600">Uptime Garantido</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-trust-600 mb-2">24/7</div>
            <div class="text-gray-600">Suporte Técnico</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar sua gestão?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de empresas que já confiam no Trust Me para
          gerenciar seus projetos e alcançar resultados excepcionais.
        </p>
        <router-link
          to="/registro"
          class="bg-trust-600 hover:bg-trust-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
        >
          Começar Agora - É Grátis
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page logic can be added here if needed
</script>
