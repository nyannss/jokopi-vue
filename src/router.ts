import {
  createRouter,
  createWebHistory,
  Router,
} from 'vue-router';

import LoginView from './views/Auth/Login.vue';
import Register from './views/Auth/Register.vue';
import NotFoundView from './views/Error/NotFound.vue';
import HomeView from './views/HomeView.vue';

const router : Router = createRouter({
  routes: [
    {
      path: "/",
      name: "jokopi",
      component: HomeView,
    },
    {
      path: "/auth/login",
      name:"Login",
      component: LoginView,
    },
    {
      path: "/auth/register",
      name:"Register",
      component: Register,
    },
    {
      path: "/:notFound",
      name: "404 Not Found - jokopi",
      component: NotFoundView,
    },
  ],
  history: createWebHistory()
});


const DEFAULT_TITLE = 'jokopi';
router.beforeEach((to, _from, next) => {
  document.title = to.name?.toString() || DEFAULT_TITLE;
  next();
});

export default router;
