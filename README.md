# Trust Me - Frontend

Frontend da aplicação Trust Me, uma plataforma de gestão de projetos e equipes.

## Tecnologias Utilizadas

- Vue 3
- Vite
- Tailwind CSS
- Pinia (Gerenciamento de Estado)
- Vue Router
- Axios

## Requisitos

- Node.js 16+
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/trustme-front.git
cd trustme-front
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

```
src/
  ├── assets/        # Arquivos estáticos
  ├── components/    # Componentes Vue reutilizáveis
  ├── router/        # Configuração do Vue Router
  ├── stores/        # Stores do Pinia
  ├── services/      # Serviços (API, etc)
  ├── views/         # Páginas/Views
  └── App.vue        # Componente raiz
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a versão de produção localmente

## Backend

O backend deste projeto está disponível em: [trustme-back](https://github.com/CelDarley/trustme-back)

## Licença

MIT
