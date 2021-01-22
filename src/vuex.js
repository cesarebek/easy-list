import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: null,
  tasks: [],
};

const store = new Vuex.Store({
  state,

  getters: {
    user: (state) => {
      return state.user;
    },
    tasks: (state) => {
      return state.tasks;
    },
  },

  mutations: {
    user(state, payload) {
      state.user = payload;
    },
    tasks(state, payload) {
      state.tasks = payload;
    },
  },

  actions: {
    user(context, payload) {
      context.commit('user', payload);
    },
    tasks(context, payload) {
      context.commit('tasks', payload);
    },
  },
});

export default store;
