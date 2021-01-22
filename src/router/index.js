import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/Register';
import Login from '@/views/Login';
import Dushboard from '@/views/Dushboard';
import { authRoute } from '@/utils/authRoute.js';

Vue.use(VueRouter);

const routes = [
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/dushboard',
    name: 'dushboard',
    component: Dushboard,
    beforeEnter: authRoute,
  },
  { path: '*', redirect: '/login' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
