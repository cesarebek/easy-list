import axios from '@/axios.js';
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
    completedTasks: (state) => {
      return state.tasks.filter((task) => {
        return task.completed === 1;
      });
    },
    unCompletedTasks: (state) => {
      return state.tasks.filter((task) => {
        return task.completed === 0;
      });
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
    async user({ commit }) {
      const res = await axios.get('user');
      const user = res.data.data;
      commit('user', user);
    },
    async tasks({ commit }) {
      const res = await axios.get('tasks');
      const tasks = await res.data.data;
      commit('tasks', tasks);
    },
  },
});

export default store;
