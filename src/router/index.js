import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // - /dashboard
  // - /dashboard/54

  // Динамические пути (ок)
  // -- путь с звездочкой* ($route.params.pathMatch)
  // возможности path-to-regexp
  // Вложенные маршруты
  // Именованные представления
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: ':task_id',
        component: () => import('../views/Registr.vue'),
        props: true,
      },
      // {
      //   path: '',
      //   component: () => import('../views/Login.vue'),
      // },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/registr',
    component: () => import('../views/Registr.vue'),
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
