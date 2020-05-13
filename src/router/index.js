import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from '@/firebase';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { auth: true },
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/registration',
      component: () => import('../views/Registration.vue'),
    },
    {
      path: '*',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.currentUser();
  const requireAuth = to.matched.some((record) => record.meta.auth);
  if (requireAuth && !currentUser) {
    next('/login?message=login');
  } else {
    next();
  }
});

export default router;

// - /dashboard
// - /dashboard/54

// Динамические пути (ок)
// -- путь с звездочкой* ($route.params.pathMatch)
// возможности path-to-regexp
// Вложенные маршруты
// Именованные представления

// children: [
//   {
//     path: ':task_id',
//     component: () => import('../views/Registration.vue'),
//     props: true,
//   },
// ],
