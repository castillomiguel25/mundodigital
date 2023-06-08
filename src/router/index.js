import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/init',
    name: 'init',
    component: SignInView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;