// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload = 1) {
      state.count += payload
    },
    decrement (state, payload = 1) {
      state.count -= payload
    }
  },
  getters: {
    count (state, getters) {
      return state.count
    }
  }
})

//store.commit('increment')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
