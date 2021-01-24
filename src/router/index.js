import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/Register';
import Login from '@/views/Login';
import { authRoute } from '@/utils/authRoute.js';
import Dushboard from '@/views/Dushboard';
import allTasks from '@/components/tasks/AllTasks';
import CompletedTasks from '@/components/tasks/CompletedTasks';
import UnCompletedTasks from '@/components/tasks/UnCompletedTasks';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dushboard',
    component: Dushboard,
    beforeEnter: authRoute,
    children: [
      {
        path: 'all',
        component: allTasks,
        beforeEnter: authRoute,
      },
      {
        path: 'completed',
        component: CompletedTasks,
        beforeEnter: authRoute,
      },
      {
        path: 'running',
        component: UnCompletedTasks,
        beforeEnter: authRoute,
      },
      {
        path: '*',
        redirect: 'all',
        beforeEnter: authRoute,
      },
    ],
  },

  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '*', redirect: '/dushboard/all' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
