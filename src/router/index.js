import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login';
import Home from '@/views/Home';
import Dashboard from '@/views/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        reqLogin: false,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        reqLogin: false,
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        reqLogin: true,
      },
    },
  ],
});
