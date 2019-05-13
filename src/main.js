import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index';
import store from './store'

import { login } from './api/login'

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App),
  mounted () {
    login({
     
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  },
})
