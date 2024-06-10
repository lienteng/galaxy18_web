import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Home.vue';
import Products from '@/views/products/Products.vue';
import Login from '@/views/auth/Login.vue';
import { useAuthStore } from '@/stores/user';
import Dashboard from '@/components/Dashboard.vue';
import ProfilePage from '@/views/profile/ProfilePage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: { requiresAuth: true },
  },
  { path: '/profile', name: 'Profile', component: ProfilePage },
  // {
  //   path: '/',
  //   component: Home,
  //   meta: { requiresAuth: true },
  //   children: [
  //     {
  //       path: '',
  //       name: '/dashboard',
  //       component: Dashboard,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: 'products',
  //       name: '/Products',
  //       component: Products,
  //       meta: { requiresAuth: true },
  //     },
     
  //   ]
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth) && !authStore.token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;



