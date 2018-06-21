import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store/store.js';
import routes from './routes.js';

import VueResource from 'vue-resource';
import Bootstrap from 'bootstrap-css-only'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
