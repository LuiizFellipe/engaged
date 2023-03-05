import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/personagem/:id',
    name: 'personagem',
    component: () => import('../views/PersonagemView.vue')
  },
  {
    path: '/busca',
    name: 'busca',
    component: () => import('../views/BuscaView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
