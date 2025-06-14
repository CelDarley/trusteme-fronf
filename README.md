# Trust Me - Frontend Vue 3

Frontend completo em Vue 3 para a plataforma Trust Me, desenvolvido com as mais modernas tecnologias web.

## 🚀 Tecnologias Utilizadas

- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool rápido e moderno
- **Vue Router** - Roteamento oficial do Vue
- **Pinia** - Gerenciamento de estado
- **Tailwind CSS** - Framework CSS utilitário
- **Axios** - Cliente HTTP para APIs

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.vue
│   ├── Footer.vue
│   ├── Modal.vue
│   ├── Loader.vue
│   ├── FormInput.vue
│   └── PlanCard.vue
├── views/              # Páginas da aplicação
│   ├── Home.vue
│   ├── About.vue
│   ├── Plans.vue
│   ├── Contact.vue
│   ├── Dashboard.vue
│   ├── Testimonials.vue
│   ├── Faq.vue
│   ├── auth/           # Páginas de autenticação
│   │   ├── Login.vue
│   │   ├── Register.vue
│   │   └── ForgotPassword.vue
│   └── admin/          # Painel administrativo
│       ├── Admin.vue
│       ├── Users.vue
│       ├── Plans.vue
│       ├── Contacts.vue
│       ├── Faqs.vue
│       └── Testimonials.vue
├── stores/             # Gerenciamento de estado
│   └── auth.js
├── services/           # Serviços e APIs
│   └── api.js
├── router/             # Configuração de rotas
│   └── index.js
└── assets/             # Recursos estáticos
```

## 🛠️ Funcionalidades

### Autenticação
- Login e registro de usuários
- Recuperação de senha
- Gerenciamento de sessão
- Proteção de rotas

### Dashboard do Usuário
- Painel personalizado
- Gerenciamento de perfil
- Histórico de atividades

### Painel Administrativo
- Gerenciamento de usuários
- Controle de planos
- Gestão de contatos
- Administração de FAQs
- Gerenciamento de depoimentos

### Páginas Públicas
- Página inicial com apresentação
- Sobre a empresa
- Planos e preços
- Contato
- Depoimentos
- FAQ

## ⚙️ Configuração e Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/CelDarley/trusteme-fronf.git
cd trusteme-fronf
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas configurações:
```env
VITE_API_BASE_URL=http://localhost:8001/api
VITE_APP_NAME=Trust Me
```

### Executando o Projeto

#### Desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:5173`

#### Build para Produção
```bash
npm run build
```

#### Preview da Build
```bash
npm run preview
```

## 🔗 Integração com Backend

Este frontend está configurado para integrar com a API Laravel do Trust Me:
- Base URL: `http://localhost:8001/api`
- Autenticação via Laravel Sanctum
- Endpoints para todas as funcionalidades

### Principais Endpoints Utilizados
- `POST /auth/login` - Login
- `POST /auth/register` - Registro
- `GET /user` - Dados do usuário
- `GET /plans` - Lista de planos
- `POST /contacts` - Envio de contato
- `GET /faqs` - FAQs
- `GET /testimonials` - Depoimentos

## 🎨 Design e UX

- Interface moderna e responsiva
- Design system consistente
- Componentes reutilizáveis
- Experiência otimizada para mobile
- Carregamento otimizado com lazy loading

## 📱 Responsividade

O projeto é totalmente responsivo, funcionando perfeitamente em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Segurança

- Validação de formulários
- Sanitização de dados
- Proteção contra XSS
- Autenticação segura
- Rotas protegidas

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Upload da pasta dist/ para Vercel
```

### Netlify
```bash
npm run build
# Upload da pasta dist/ para Netlify
```

### Servidor Próprio
```bash
npm run build
# Copie o conteúdo da pasta dist/ para seu servidor web
```

## 📄 Licença

Este projeto é propriedade privada da Trust Me.

## 👥 Contribuição

Para contribuir com o projeto:
1. Faça um fork
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Suporte

Para suporte técnico, entre em contato através do sistema de contato da plataforma.

---

**Trust Me** - Sua confiança, nossa prioridade.
