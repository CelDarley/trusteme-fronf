
<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-trust-600 to-trust-800 text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in-left animation-delay-200">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-300">
              Confie no seu
              <span class="text-trust-200 animate-fade-in-up animation-delay-500">sucesso</span>
            </h1>
            <p class="text-xl mb-8 text-trust-100 animate-fade-in-up animation-delay-400">
              A plataforma completa para gerenciar seus projetos, equipes e alcançar resultados extraordinários.
              Simplifique sua gestão e potencialize seus resultados.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <router-link
                to="/registro"
                class="btn-hero bg-white text-trust-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-center"
              >
                Começar Gratuitamente
              </router-link>
              <router-link
                to="/planos"
                class="btn-hero border-2 border-white text-white hover:bg-white hover:text-trust-600 font-semibold py-3 px-8 rounded-lg text-center"
              >
                Ver Planos
              </router-link>
            </div>
          </div>
          <div class="flex justify-center animate-fade-in-right animation-delay-400 relative">
            <img
              src="/src/assets/banner.png"
              alt="Consentir Platform"
              class="max-w-full h-auto rounded-lg shadow-2xl hero-float hero-glow"
            />
            <!-- Badge de avaliação -->
            <RatingBadge 
              rating="5.0" 
              label="Avaliação" 
              position="top-right"
              class="absolute"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o Consentir?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para transformar sua gestão
            e impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1: Gestão Simplificada -->
          <div class="rounded-lg bg-card text-card-foreground h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg card-animated animate-fade-in-up animation-delay-300">
            <div class="flex flex-col space-y-1.5 p-6 text-center pb-4">
              <div class="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle h-12 w-12 text-trust-600">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22,4 12,14.01 9,11.01"></polyline>
                </svg>
              </div>
              <h3 class="tracking-tight text-xl font-bold text-gray-900">Gestão Simplificada</h3>
              <p class="text-sm text-gray-600">Interface intuitiva que facilita o gerenciamento de projetos e equipes, aumentando a produtividade de forma significativa.</p>
            </div>
            <div class="p-6 pt-0">
              <ul class="space-y-3">
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Interface intuitiva</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Gerenciamento fácil</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Produtividade aumentada</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card 2: Performance Otimizada -->
          <div class="rounded-lg bg-card text-card-foreground h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg card-animated animate-fade-in-up animation-delay-500">
            <div class="flex flex-col space-y-1.5 p-6 text-center pb-4">
              <div class="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-12 w-12 text-trust-600">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                </svg>
              </div>
              <h3 class="tracking-tight text-xl font-bold text-gray-900">Performance Otimizada</h3>
              <p class="text-sm text-gray-600">Ferramentas avançadas de análise e relatórios que ajudam você a tomar decisões mais inteligentes e estratégicas.</p>
            </div>
            <div class="p-6 pt-0">
              <ul class="space-y-3">
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Análise avançada</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Relatórios detalhados</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Decisões inteligentes</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card 3: Segurança Garantida -->
          <div class="rounded-lg bg-card text-card-foreground h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg card-animated animate-fade-in-up animation-delay-700">
            <div class="flex flex-col space-y-1.5 p-6 text-center pb-4">
              <div class="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-12 w-12 text-trust-600">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 class="tracking-tight text-xl font-bold text-gray-900">Segurança Garantida</h3>
              <p class="text-sm text-gray-600">Seus dados protegidos com criptografia de ponta e backup automático, garantindo total segurança e confiabilidade.</p>
            </div>
            <div class="p-6 pt-0">
              <ul class="space-y-3">
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Criptografia avançada</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Backup automático</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span class="text-gray-700">Proteção total</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-trust-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="animate-fade-in-up animation-delay-200 hover-lift">
            <div class="text-4xl font-bold text-trust-600 mb-2 animate-bounce-in animation-delay-400">10k+</div>
            <div class="text-gray-600">Usuários Ativos</div>
          </div>
          <div class="animate-fade-in-up animation-delay-400 hover-lift">
            <div class="text-4xl font-bold text-trust-600 mb-2 animate-bounce-in animation-delay-600">50k+</div>
            <div class="text-gray-600">Projetos Concluídos</div>
          </div>
          <div class="animate-fade-in-up animation-delay-600 hover-lift">
            <div class="text-4xl font-bold text-trust-600 mb-2 animate-bounce-in animation-delay-800">99.9%</div>
            <div class="text-gray-600">Uptime Garantido</div>
          </div>
          <div class="animate-fade-in-up animation-delay-800 hover-lift">
            <div class="text-4xl font-bold text-trust-600 mb-2 animate-bounce-in animation-delay-1000">24/7</div>
            <div class="text-gray-600">Suporte Técnico</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Como Funciona Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">Em apenas 3 passos simples, você pode começar a usar o Trust-me para suas necessidades de segurança jurídica.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Passo 1 -->
          <div class="text-center animate-fade-in-up animation-delay-300 hover-lift">
            <div class="w-16 h-16 bg-trust-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-bounce-in animation-delay-400">
              1
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Cadastre-se</h3>
            <p class="text-gray-600">Crie sua conta e verifique seu email para começar a usar a plataforma.</p>
          </div>
          
          <!-- Passo 2 -->
          <div class="text-center animate-fade-in-up animation-delay-500 hover-lift">
            <div class="w-16 h-16 bg-trust-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-bounce-in animation-delay-600">
              2
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Escolha seu Plano</h3>
            <p class="text-gray-600">Selecione o plano que melhor atende às suas necessidades de selos e contratos.</p>
          </div>
          
          <!-- Passo 3 -->
          <div class="text-center animate-fade-in-up animation-delay-700 hover-lift">
            <div class="w-16 h-16 bg-trust-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-bounce-in animation-delay-800">
              3
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Comece a Usar</h3>
            <p class="text-gray-600">Estabeleça conexões seguras, crie contratos e obtenha selos de veracidade.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up animation-delay-200">
          Pronto para transformar sua gestão?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
                      Junte-se a milhares de empresas que já confiam no Consentir para
          gerenciar seus projetos e alcançar resultados excepcionais.
        </p>
        <router-link
          to="/registro"
          class="btn-hero bg-trust-600 hover:bg-trust-700 text-white font-semibold py-3 px-8 rounded-lg inline-block animate-fade-in-up animation-delay-600"
        >
          Começar Agora - É Grátis
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import RatingBadge from '../components/RatingBadge.vue'
</script>
