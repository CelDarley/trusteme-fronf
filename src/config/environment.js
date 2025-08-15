// Configuração de ambiente
const ENV = {
  // Desenvolvimento local
  DEVELOPMENT: {
    API_BASE_URL: 'http://localhost:8000/api',
    APP_NAME: 'Trust-me (Dev)',
  },
  
  // Produção - URL da Digital Ocean (domínio + porta 8000)
  PRODUCTION: {
    API_BASE_URL: 'https://consentir.catenasystem.com.br:8000/api',
    APP_NAME: 'Trust-me',
  },
  
  // Staging/Teste
  STAGING: {
    API_BASE_URL: 'https://staging.seu-dominio.com/api',
    APP_NAME: 'Trust-me (Staging)',
  }
}

// Detecta o ambiente automaticamente
const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'
const isStaging = window.location.hostname.includes('staging')

// Seleciona a configuração baseada no ambiente
let currentEnv = ENV.DEVELOPMENT
if (isProduction) {
  currentEnv = ENV.PRODUCTION
} else if (isStaging) {
  currentEnv = ENV.STAGING
}

// Configuração atual
export const CONFIG = {
  API_BASE_URL: currentEnv.API_BASE_URL,
  APP_NAME: currentEnv.APP_NAME,
  IS_PRODUCTION: isProduction,
  IS_DEVELOPMENT: !isProduction,
}

// Log da configuração atual (útil para debug)
console.log('🔧 Ambiente detectado:', {
  hostname: window.location.hostname,
  environment: isProduction ? 'PRODUÇÃO' : isStaging ? 'STAGING' : 'DESENVOLVIMENTO',
  apiUrl: CONFIG.API_BASE_URL,
  appName: CONFIG.APP_NAME
})

export default CONFIG 