import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/DashboardView.vue'),
      requiresAuth: true,
    },
    {
      path: '/register',
      name: 'Registration',
      component: () => import('@/views/RegistrationView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/reset-password',
      name: 'Reset Password',
      component: () => import('@/views/ResetPasswordView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
