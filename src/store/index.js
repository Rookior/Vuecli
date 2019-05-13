import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex)

const moduleA = {
  state: { 
    aa: 111,
    count: 3 
  },
  mutations: {
    incrementModuleA (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('incrementModuleA')
      }
    }
  },
  getters: { 
    
  }
}

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementNum (state, payload) {
      state.count += payload.amount
    },
    descmentNum (state, payload) {
      state.count -= payload.amount
    },
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    descmentAsync ({ commit }) {
      setTimeout(() => {
        commit({
          type: 'descmentNum',
          amount: 10
        })
      }, 1000)
    }
  },
  modules: {
    a: moduleA,
    app,
    user
  }
})