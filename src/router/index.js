import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Lazy loading das páginas
const Home = () => import('@/views/Home.vue')
const Plans = () => import('@/views/Plans.vue')
const About = () => import('@/views/About.vue')
const Faq = () => import('@/views/Faq.vue')
const Testimonials = () => import('@/views/Testimonials.vue')
const Contact = () => import('@/views/Contact.vue')
const Login = () => import('@/views/auth/Login.vue')
const Register = () => import('@/views/auth/Register.vue')
const ForgotPassword = () => import('@/views/auth/ForgotPassword.vue')
const Dashboard = () => import('@/views/Dashboard.vue')
const Admin = () => import('@/views/admin/Admin.vue')
const AdminUsers = () => import('@/views/admin/Users.vue')
const AdminPlans = () => import('@/views/admin/Plans.vue')
const AdminFaqs = () => import('@/views/admin/Faqs.vue')
const AdminTestimonials = () => import('@/views/admin/Testimonials.vue')
const AdminContacts = () => import('@/views/admin/Contacts.vue')
const ContractTypes = () => import('@/views/admin/ContractTypes.vue')
const Selos = () => import('@/views/admin/Selos.vue')
const SiteSettings = () => import('@/views/admin/SiteSettings.vue')
const PaymentSuccess = () => import('@/views/PaymentSuccess.vue')
const PaymentFailure = () => import('@/views/PaymentFailure.vue')
const PaymentPending = () => import('@/views/PaymentPending.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/planos',
    name: 'Plans',
    component: Plans,
  },
  {
    path: '/sobre',
    name: 'About',
    component: About,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
  },
  {
    path: '/depoimentos',
    name: 'Testimonials',
    component: Testimonials,
  },
  {
    path: '/contato',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true },
  },
  {
    path: '/registro',
    name: 'Register',
    component: Register,
    meta: { guest: true },
  },
  {
    path: '/esqueci-senha',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { guest: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: Admin
      },
      {
        path: 'usuarios',
        name: 'admin-users',
        component: AdminUsers
      },
      {
        path: 'planos',
        name: 'admin-plans',
        component: AdminPlans
      },
      {
        path: 'contract-types',
        name: 'admin-contract-types',
        component: ContractTypes
      },
      {
        path: 'selos',
        name: 'admin-selos',
        component: Selos
      },
      {
        path: 'faqs',
        name: 'admin-faqs',
        component: AdminFaqs
      },
      {
        path: 'depoimentos',
        name: 'admin-testimonials',
        component: AdminTestimonials
      },
      {
        path: 'contatos',
        name: 'admin-contacts',
        component: AdminContacts
      },
      {
        path: 'site-settings',
        name: 'admin-site-settings',
        component: SiteSettings
      }
    ]
  },
  // Rotas de pagamento
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: PaymentSuccess,
    meta: { requiresAuth: true },
  },
  {
    path: '/payment/failure',
    name: 'PaymentFailure',
    component: PaymentFailure,
    meta: { requiresAuth: true },
  },
  {
    path: '/payment/pending',
    name: 'PaymentPending',
    component: PaymentPending,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guards
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  console.log('Verificando rota:', to.path)
  console.log('Usuário autenticado:', authStore.isAuthenticated)
  console.log('Dados do usuário:', authStore.user)
  console.log('É admin?', authStore.isAdmin)
  
  // Fetch user if authenticated but no user data
  if (authStore.token && !authStore.user) {
    console.log('Buscando dados do usuário...')
    await authStore.fetchUser()
  }
  
  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    console.log('Rota requer autenticação, redirecionando para login')
    next('/login')
    return
  }
  
  // Check if route requires admin
  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    console.log('Rota requer admin, redirecionando para dashboard')
    next('/dashboard')
    return
  }
  
  // Redirect authenticated users away from guest pages
  if (to.meta.guest && authStore.isAuthenticated) {
    console.log('Usuário autenticado tentando acessar página de guest')
    if (authStore.isAdmin) {
      console.log('Redirecionando admin para painel admin')
      next('/admin')
    } else {
      console.log('Redirecionando usuário para dashboard')
      next('/dashboard')
    }
    return
  }
  
  next()
})

export default router
