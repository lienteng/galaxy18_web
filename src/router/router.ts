import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Home.vue';
import Login from '@/views/auth/Login.vue';
import { useAuthStore } from '@/stores/user';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/components/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('@/views/dashboard/Profile.vue'),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/users',
  //   name: 'Users',
  //   component: () => import('@/views/dashboard/Users.vue'),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/posts',
  //   name: 'Posts',
  //   component: () => import('@/views/dashboard/Posts.vue'),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: '/comments',
  //   name: 'Comments',
  //   component: () => import('@/views/dashboard/Comments.vue'),
  //   meta: { requiresAuth: true },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});


export default router;
