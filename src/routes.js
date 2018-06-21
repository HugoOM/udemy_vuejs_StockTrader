import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Stocks from './components/Stocks.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/stocks',
    component: Stocks,
    props: true
  },
  {
    path: '/portfolio',
    component: Stocks,
    props: true
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
});
