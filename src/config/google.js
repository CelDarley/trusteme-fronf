// Configuração do Google OAuth
export const GOOGLE_CONFIG = {
  // Client ID do Google OAuth (será configurado no .env)
  CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'your_google_client_id_here',
  
  // URL de redirecionamento após autenticação
  REDIRECT_URI: import.meta.env.VITE_GOOGLE_REDIRECT_URI || 'http://localhost:5173/auth/google/callback',
  
  // Escopo das permissões solicitadas
  SCOPE: 'email profile',
  
  // URLs da API
  AUTH_URL: 'https://accounts.google.com/o/oauth2/v2/auth',
  TOKEN_URL: 'https://oauth2.googleapis.com/token',
  USER_INFO_URL: 'https://www.googleapis.com/oauth2/v2/userinfo',
}

// Função para gerar URL de autorização do Google
export const generateGoogleAuthUrl = () => {
  const params = new URLSearchParams({
    client_id: GOOGLE_CONFIG.CLIENT_ID,
    redirect_uri: GOOGLE_CONFIG.REDIRECT_URI,
    scope: GOOGLE_CONFIG.SCOPE,
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  })
  
  return `${GOOGLE_CONFIG.AUTH_URL}?${params.toString()}`
}

// Função para extrair código de autorização da URL
export const extractAuthCode = (url) => {
  const urlParams = new URLSearchParams(url.split('?')[1])
  return urlParams.get('code')
}

export default GOOGLE_CONFIG 