import {
  createRouter,
  createWebHistory,
  Router,
} from 'vue-router';

import HomeView from './views/HomeView.vue';

export const router : Router = createRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
  history: createWebHistory()
});
