import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/Login.vue'
import PedidoCliente from '../views/Pedidos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/Catalogo',
    name: 'Catalogo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Catalogo.vue')
  },
  {
    path: '/Pedidos',
    name: 'Pedidos',
    component: PedidoCliente
  },
  {
    path: '/DatosDePedidos',
    name: 'DatosDePedidos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/DatosDePedidos.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
