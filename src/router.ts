import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import HomeView from './views/HomeView.vue';

export const router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
  history: createWebHistory()
});
