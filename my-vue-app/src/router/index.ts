import { createRouter, createWebHistory } from 'vue-router';
import RegistrationOrAuth from '@/components/RegistrationOrAuth.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: RegistrationOrAuth,
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationOrAuth,
    },
  ],
});

export default router;
