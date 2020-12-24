import Vue from 'vue';
import Pubsub from 'pubsub-js';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/common/style/reset.css';
import 'swiper/swiper-bundle.css';

Vue.prototype.Pubsub = Pubsub; // Pubsub全局注册
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
