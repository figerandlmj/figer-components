/* 引入Vue相关 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import App from './app.vue';

import { Button, Modal } from '../components';
Vue.component('Button', Button);
Vue.component('Modal', Modal);

Vue.use(VueRouter);
// 路由配置
const RouterConfig = {
  routes: Routers
};

const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
