import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/stores/user'

// Importando as views
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

// Definindo as rotas com tipagem
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: 'Login',
      requiresAuth: false, // Rota pública
      layout: 'public' // Usa layout público (limpo)
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
      requiresAuth: true // Rota protegida
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'Sobre',
      requiresAuth: true // Rota protegida
    }
  },
  {
    // Rota 404 - redireciona para home
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Scroll para o topo ao navegar
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Guard global - executa antes de cada navegação
router.beforeEach((to, from, next) => {
  // Atualiza o título da página
  document.title = `${to.meta.title || 'Meu MVP'} | Vue 3 App`
  
  // Verifica se a rota requer autenticação
  const requiresAuth = to.meta.requiresAuth
  const userStore = useUserStore()
  
  // Se a rota requer autenticação e o usuário NÃO está autenticado
  if (requiresAuth && !userStore.isAuthenticated) {
    // Redireciona para login, salvando a rota de destino
    next({
      name: 'login',
      query: { redirect: to.fullPath }
    })
  }
  // Se o usuário está autenticado e tenta acessar o login
  else if (to.name === 'login' && userStore.isAuthenticated) {
    // Redireciona para home
    next({ name: 'home' })
  }
  // Caso contrário, permite a navegação
  else {
    next()
  }
})

export default router
