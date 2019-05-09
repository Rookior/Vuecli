import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index';

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.num;
    }
  }
})

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
