import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('@/pages/courseDetail/courseDetail.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
