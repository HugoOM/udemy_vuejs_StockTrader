import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js';
import router from './routes.js';
import VueResource from 'vue-resource';
import Bootstrap from 'bootstrap-css-only'
import AnimateCSS from 'animate.css'

Vue.use(VueResource);

Vue.http.options.root = "https://udemy-vuejs-http-hmon.firebaseio.com/";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
