import Vue from 'vue'
import Vuex from 'Vuex'
import user from './user.js';
import stocks from './stocks.js';
import messages from './messages.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      ...user
    },
    stocks: {
      namespaced: true,
      ...stocks
    },
    messages: {
      namespaced: true,
      ...messages
    }
  }
})
