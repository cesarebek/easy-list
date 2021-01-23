import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/Register';
import Login from '@/views/Login';
import Dushboard from '@/views/Dushboard';
import { authRoute } from '@/utils/authRoute.js';
import AllTasks from '@/components/tasks/AllTasks';
import CompletedTasks from '@/components/tasks/CompletedTasks';
import UnCompletedTasks from '@/components/tasks/UnCompletedTasks';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dushboard',
    name: 'dushboard',
    component: Dushboard,
    beforeEnter: authRoute,
    children: [
      { path: 'running', name: 'all', component: AllTasks },
      { path: 'completed', name: 'completed', component: CompletedTasks },
      { path: 'uncompleted', name: 'uncompleted', component: UnCompletedTasks },
      { path: '*', redirect: 'running' },
    ],
  },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '*', redirect: '/dushboard' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
